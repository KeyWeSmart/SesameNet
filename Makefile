PACKAGES=$(shell go list ./... | grep -v '/simulation')
PACKAGE_NAME:=github.com/KeyWeSmart/SesameNet
GOLANG_CROSS_VERSION  = v1.19.3

VERSION := $(shell echo $(shell git describe --tags 2>/dev/null ) | sed 's/^v//')
TMVERSION := $(shell go list -m github.com/tendermint/tendermint | sed 's:.* ::')
COMMIT := $(shell git log -1 --format='%H')
NETWORK ?= mainnet
COVERAGE ?= coverage.txt
BUILDDIR ?= $(CURDIR)/build
LEDGER_ENABLED ?= true
# RocksDB is a native dependency, so we don't assume the library is installed.
# Instead, it must be explicitly enabled and we warn when it is not.
ENABLE_ROCKSDB ?= false

export GO111MODULE = on

build_tags = netgo
ifeq ($(LEDGER_ENABLED),true)
  ifeq ($(OS),Windows_NT)
    GCCEXE = $(shell where gcc.exe 2> NUL)
    ifeq ($(GCCEXE),)
      $(error gcc.exe not installed for ledger support, please install or set LEDGER_ENABLED=false)
    else
      build_tags += ledger
    endif
  else
    UNAME_S = $(shell uname -s)
    ifeq ($(UNAME_S),OpenBSD)
      $(warning OpenBSD detected, disabling ledger support (https://github.com/cosmos/cosmos-sdk/issues/1988))
    else
      GCC = $(shell command -v gcc 2> /dev/null)
      ifeq ($(GCC),)
        $(error gcc not installed for ledger support, please install or set LEDGER_ENABLED=false)
      else
        build_tags += ledger
      endif
    endif
  endif
endif

ifeq (secp,$(findstring secp,$(COSMOS_BUILD_OPTIONS)))
  build_tags += libsecp256k1_sdk
endif

ifeq ($(ENABLE_ROCKSDB),true)
  BUILD_TAGS += rocksdb_build
  test_tags += rocksdb_build
else
  $(warning RocksDB support is disabled; to build and test with RocksDB support, set ENABLE_ROCKSDB=true)
endif

# DB backend selection
ifeq (cleveldb,$(findstring cleveldb,$(COSMOS_BUILD_OPTIONS)))
  build_tags += gcc
endif
ifeq (badgerdb,$(findstring badgerdb,$(COSMOS_BUILD_OPTIONS)))
  BUILD_TAGS += badgerdb
endif
# handle rocksdb
ifeq (rocksdb,$(findstring rocksdb,$(COSMOS_BUILD_OPTIONS)))
  ifneq ($(ENABLE_ROCKSDB),true)
    $(error Cannot use RocksDB backend unless ENABLE_ROCKSDB=true)
  endif
  CGO_ENABLED=1
  BUILD_TAGS += rocksdb
endif

# handle boltdb
ifeq (boltdb,$(findstring boltdb,$(COSMOS_BUILD_OPTIONS)))
  BUILD_TAGS += boltdb
endif

ifeq ($(NETWORK),testnet)
	BUILD_TAGS += testnet
	test_tags += testnet
endif

build_tags += $(BUILD_TAGS)
build_tags := $(strip $(build_tags))

whitespace :=
whitespace += $(whitespace)
comma := ,
build_tags_comma_sep := $(subst $(whitespace),$(comma),$(build_tags))

# process linker flags

ldflags = -X github.com/cosmos/cosmos-sdk/version.Name=crypto-org-chain-chain \
	-X github.com/cosmos/cosmos-sdk/version.AppName=chain-maind \
	-X github.com/cosmos/cosmos-sdk/version.Version=$(VERSION) \
	-X github.com/cosmos/cosmos-sdk/version.Commit=$(COMMIT) \
	-X github.com/tendermint/tendermint/version.TMCoreSemVer=$(TMVERSION) \
	-X "github.com/cosmos/cosmos-sdk/version.BuildTags=$(build_tags_comma_sep)"

ifeq (,$(findstring nostrip,$(COSMOS_BUILD_OPTIONS)))
  ldflags += -w -s
endif
ldflags += $(LDFLAGS)
ldflags := $(strip $(ldflags))

BUILD_FLAGS := -tags "$(build_tags)" -ldflags '$(ldflags)'
# check for nostrip option
ifeq (,$(findstring nostrip,$(COSMOS_BUILD_OPTIONS)))
  BUILD_FLAGS += -trimpath
endif

# Check for debug option
ifeq (debug,$(findstring debug,$(COSMOS_BUILD_OPTIONS)))
  BUILD_FLAGS += -gcflags "all=-N -l"
endif

TEST_FLAGS := -tags "$(test_tags)"

TESTNET_FLAGS ?=

SIMAPP = github.com/crypto-org-chain/chain-main/v4/app
BINDIR ?= ~/go/bin

OS := $(shell uname)


all: download install

download:
	git submodule update --init --recursive

install: check-network go.sum
		go install -mod=readonly $(BUILD_FLAGS) ./cmd/sesamenetd

build:
		go build -mod=readonly $(BUILD_FLAGS) -o $(BUILDDIR)/sesame ./cmd/sesamenetd

buildwindows: check-network go.sum
		go build -buildmode=exe -mod=readonly $(BUILD_FLAGS) -o $(BUILDDIR)/sesame ./cmd/sesamenetd

.PHONY: build

build-linux: go.sum
ifeq ($(OS), Linux)
		GOOS=linux GOARCH=amd64 $(MAKE) build
else
		LEDGER_ENABLED=false GOOS=linux GOARCH=amd64 $(MAKE) build
endif

build-mac: go.sum
ifeq ($(OS), Darwin)
		GOOS=darwin GOARCH=amd64 $(MAKE) build
else
		LEDGER_ENABLED=false GOOS=darwin GOARCH=amd64 $(MAKE) build
endif

go.sum: go.mod
		@echo "--> Ensure dependencies have not been modified"
		GO111MODULE=on go mod verify

test: check-network
	@go test $(TEST_FLAGS) -v -mod=readonly $(PACKAGES) -coverprofile=$(COVERAGE) -covermode=atomic
.PHONY: test

###############################################################################
###                                Localnet                                 ###
###############################################################################

build-docker-chainmaindnode:
	$(MAKE) -C check-networks/local

# Run a 4-node testnet locally
localnet-start: build-linux build-docker-chainmaindnode localnet-stop
	@if ! [ -f $(BUILDDIR)/node0/.chain-maind/config/genesis.json ]; \
	then docker run --rm -v $(BUILDDIR):/chain-maind:Z cryptocom/chainmaindnode testnet --v 4 -o . --starting-ip-address 192.168.10.2 $(TESTNET_FLAGS); \
	fi
	BUILDDIR=$(BUILDDIR) docker-compose up -d

# Stop testnet
localnet-stop:
	docker-compose down
	docker check-network prune -f

# local build pystarport
build-pystarport:
	pip install ./pystarport

# Run a local testnet by pystarport
localnet-pystartport: build-pystarport
	pystarport serve

clean:
	rm -rf $(BUILDDIR)/

clean-docker-compose: localnet-stop
	rm -rf $(BUILDDIR)/node* $(BUILDDIR)/gentxs

create-systemd:
	./networks/create-service.sh

make-proto:
	./makeproto.sh

chaindImage: nix-build-chaindImage
pystarportImage: nix-build-pystarportImage

check-network:
ifeq ($(NETWORK),mainnet)	
else ifeq ($(NETWORK),testnet)
else
	@echo "Unrecognized network: ${NETWORK}"
endif
	@echo "building network: ${NETWORK}"

check-os:
ifeq ($(OS), Darwin)
ifneq ("$(wildcard ~/.nix/remote-build-env))","")
	@echo "installed nix-remote-builder before" && \
	docker run --restart always --name nix-docker -d -p 3022:22 lnl7/nix:ssh 2> /dev/null || echo "nix-docker is already running"
else
	@echo install nix-remote-builder
	git clone https://github.com/holidaycheck/nix-remote-builder.git
	cd nix-remote-builder && ./init.sh
	rm -rf nix-remote-builder
endif
endif

###############################################################################
###                              Release                                    ###
###############################################################################
.PHONY: release-dry-run
release-dry-run:
	docker run \
		--rm \
		--privileged \
		-e CGO_ENABLED=1 \
		-v /var/run/docker.sock:/var/run/docker.sock \
		-v `pwd`:/go/src/$(PACKAGE_NAME) \
		-v ${GOPATH}/pkg:/go/pkg \
		-w /go/src/$(PACKAGE_NAME) \
		ghcr.io/goreleaser/goreleaser-cross:${GOLANG_CROSS_VERSION} \
		--rm-dist --skip-validate --skip-publish

.PHONY: release
release:
	@if [ ! -f ".release-env" ]; then \
		echo "\033[91m.release-env is required for release\033[0m";\
		exit 1;\
	fi
	docker run \
		--rm \
		--privileged \
		-e CGO_ENABLED=1 \
		--env-file .release-env \
		-v /var/run/docker.sock:/var/run/docker.sock \
		-v `pwd`:/go/src/$(PACKAGE_NAME) \
		-w /go/src/$(PACKAGE_NAME) \
		ghcr.io/goreleaser/goreleaser-cross:${GOLANG_CROSS_VERSION} \
		release --rm-dist --skip-validate

###############################################################################
###                              Documentation                              ###
###############################################################################

# generate api swagger document
document:
	make all -f MakefileDoc

# generate protobuf files
# ./proto -> ./x
proto-all:
	make proto-all -f MakefileDoc



















dbuild:
	docker build -t thesesamelab/sesamenet -f ./deploy/docker/Dockerfile . --platform linux/amd64

dinit:
	rm -rf ./deploy/testnet && \
	cp -r ./deploy/testnet_config ./deploy/testnet

dup:
	cd ./deploy && \
	docker compose up -d --force-recreate

ddown:
	cd ./deploy && \
	docker compose down

duprefresh: ddown dinit dup

.PHONY: dbuild dinit dup ddown duprefresh build