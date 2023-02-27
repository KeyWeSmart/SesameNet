CHAIN_ID="ssc-devnet"
MNEMONIC0="nation glance keep family feed demand want sauce certain grit logic roast disease aim jealous pause law fiscal tent hobby antenna book sheriff total"
MNEMONIC1="bind claim solve athlete record appear fruit maple strategy post absent unfold outdoor tent play evil nephew paper agent visa eye tomato plate process"
MNEMONIC2="pledge raccoon canoe couch until time fitness legend bunker liquid become expect alcohol inherit alter theme jazz nasty sad pencil near reopen decide direct"
MNEMONIC3="bulb bottom rough elevator note purity twice sure hill refuse galaxy body wreck lake flag sight retreat elevator country silly pink regret assist dove"
TREASURER="medal purchase daughter execute please bind that switch seek history much success dice bird clarify luxury devote coast labor piano dinner young marine inspire"


# remove old data
rm -rf ./node0
rm -rf ./node1
rm -rf ./node2
rm -rf ./node3

# init node
sesame init node0 --chain-id $CHAIN_ID --home ./node0
sesame init node1 --chain-id $CHAIN_ID --home ./node1
sesame init node2 --chain-id $CHAIN_ID --home ./node2
sesame init node3 --chain-id $CHAIN_ID --home ./node3

# config
sesame config chain-id $CHAIN_ID --home ./node0
sesame config keyring-backend test --home ./node0
sesame config broadcast-mode block --home ./node0

sesame config chain-id $CHAIN_ID --home ./node1
sesame config keyring-backend test --home ./node1
sesame config broadcast-mode block --home ./node1

sesame config chain-id $CHAIN_ID --home ./node2
sesame config keyring-backend test --home ./node2
sesame config broadcast-mode block --home ./node2

sesame config chain-id $CHAIN_ID --home ./node3
sesame config keyring-backend test --home ./node3
sesame config broadcast-mode block --home ./node3


# add keys
echo $MNEMONIC0 | sesame keys add node0 --home ./node0 --recover
echo $TREASURER | sesame keys add treasurer --home ./node0 --recover

echo $MNEMONIC1 | sesame keys add node1 --home ./node0 --recover
echo $MNEMONIC1 | sesame keys add node1 --home ./node1 --recover

echo $MNEMONIC2 | sesame keys add node2 --home ./node0 --recover
echo $MNEMONIC2 | sesame keys add node2 --home ./node2 --recover

echo $MNEMONIC3 | sesame keys add node3 --home ./node0 --recover
echo $MNEMONIC3 | sesame keys add node3 --home ./node3 --recover

# add genesis account
sesame add-genesis-account node0 10000000ssc --home ./node0
sesame add-genesis-account treasurer 100000000ssc --home ./node0

sesame add-genesis-account node1 10000000ssc --home ./node0
sesame add-genesis-account node1 10000000ssc --home ./node1

sesame add-genesis-account node2 10000000ssc --home ./node0
sesame add-genesis-account node2 10000000ssc --home ./node2

sesame add-genesis-account node3 10000000ssc --home ./node0
sesame add-genesis-account node3 10000000ssc --home ./node3

# add gentx validator
sesame gentx node0 5000000ssc --home ./node0 --keyring-backend test --chain-id $CHAIN_ID --moniker node0

sesame gentx node1 5000000ssc --home ./node1 --keyring-backend test --chain-id $CHAIN_ID --moniker node1

sesame gentx node2 5000000ssc --home ./node2 --keyring-backend test --chain-id $CHAIN_ID --moniker node2

sesame gentx node3 5000000ssc --home ./node3 --keyring-backend test --chain-id $CHAIN_ID --moniker node3

# copy genesis file to node0
cp ./node1/config/gentx/* ./node0/config/gentx
cp ./node2/config/gentx/* ./node0/config/gentx
cp ./node3/config/gentx/* ./node0/config/gentx

# collect gentxs
sesame collect-gentxs --home ./node0

# copy genesis file back to node 1 2 3
cp ./node0/config/genesis.json ./node1/config/genesis.json
cp ./node0/config/genesis.json ./node2/config/genesis.json
cp ./node0/config/genesis.json ./node3/config/genesis.json

NODE0ID=$(sesame tendermint show-node-id --home ./node0)
NODE1ID=$(sesame tendermint show-node-id --home ./node1)
NODE2ID=$(sesame tendermint show-node-id --home ./node2)
NODE3ID=$(sesame tendermint show-node-id --home ./node3)

cat > ../.env << EOF
NODE0IP=snode0
NODE1IP=snode1
NODE2IP=snode2
NODE3IP=snode3
NODE0ID=$NODE0ID
NODE1ID=$NODE1ID
NODE2ID=$NODE2ID
NODE3ID=$NODE3ID
EOF