geth account new --datadir node1

rmdir /s /q node1\geth

geth init --datadir node1 genesis.json


geth --datadir node1 init genesis.json

geth --datadir ./data init ../genesis.json

geth --datadir node1 --networkid 12345678 --port 30303 --http --http.addr 0.0.0.0 --http.port 8545 --http.api "eth,net,web3,admin,personal" --syncmode full --mine --unlock "0xC0E300Ad5aE1881CF00D2089d569bAF77b9E0d97" --password password.txt --allow-insecure-unlock --nodiscover

geth --datadir node1 --networkid 12345678 --http --http.api "eth,net,web3,admin,personal" --ipcpath geth.ipc

geth attach \\.\pipe\geth.ipc

geth --datadir C:\blockchain\node1 --ipcpath C:\blockchain\node1\geth.ipc

geth attach \\.\pipe\node1\geth.ipc

geth --datadir node2 --networkid 12345678 --bootnodes "enode://06f5a6f61187970b18ac1bde9407ab265c689381327853946f07183e0bf66b91118d2df17ea9e79cb078fbd25646a1d643fa4428434a67cd47681115f8119d4d"


geth attach http://127.0.0.1:8545

geth account new --datadir node1

// attach
eth.accounts
admin.nodeInfo.enode
admin.peers

geth --mine --miner.etherbase "0xeF09a0173f95b1FBE571961a5000cF1546ABc124"

//old
geth --datadir "./data" --port 30304 --bootnodes enode://f24fea380bc10b9d21576634ee0f752c82882fccaee4990c40b16aeb039952da1fe6e4280d07811500ab9f2ca6fd933f0cd493ef361725119ae49f6d1d6183d8@192.168.1.68:30301 --authrpc.port 8547 --authrpc.addr 0.0.0.0 --ipcdisable --allow-insecure-unlock --http --http.addr 0.0.0.0 --http.port 8545 --http.corsdomain="https://remix.ethereum.org" --http.api web3,eth,debug,admin,personal,net --networkid 12345678 --unlock 0x83B4F0D6EA0a3A981d35215a81466aC03845D10C --password password.txt  --mine --miner.etherbase=0x83B4F0D6EA0a3A981d35215a81466aC03845D10C --syncmode snap

geth --datadir "./data"  --port 30306 --bootnodes enode://f24fea380bc10b9d21576634ee0f752c82882fccaee4990c40b16aeb039952da1fe6e4280d07811500ab9f2ca6fd933f0cd493ef361725119ae49f6d1d6183d8@192.168.1.68:0?discport=30301 -authrpc.port 8546 --networkid 12345678 --unlock 0x0BC5276bfbd09B5A73c53d6BfCACd1827De06E40 --password password.txt


geth --datadir "./data"  --port 30309 --bootnodes enode://f24fea380bc10b9d21576634ee0f752c82882fccaee4990c40b16aeb039952da1fe6e4280d07811500ab9f2ca6fd933f0cd493ef361725119ae49f6d1d6183d8@192.168.1.68:0?discport=30301 -authrpc.port 8540 --networkid 12345678 --unlock 0xAA5fE7c291a84ABaf9dA8224f05B3588685dCa2a --password password.txt