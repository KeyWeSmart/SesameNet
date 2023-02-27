FROM golang:1.18.4-alpine3.15 AS build
WORKDIR /app

RUN set -eux; apk add --no-cache ca-certificates build-base linux-headers;
RUN apk add git

COPY  . .
RUN go mod tidy
RUN go mod download

RUN make build LEDGER_ENABLED=false BUILD_TAGS=muslc

FROM alpine:3.14
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY --from=build /app/build/* ./

RUN chmod +x ./sesame
RUN mv ./sesame /bin
#
EXPOSE 26656 26657
CMD ["sesame", "start"]