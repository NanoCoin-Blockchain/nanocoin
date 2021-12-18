const {Blockchain, Transaction} = require('/blockchain');


let nanocoin = new Blockchain();
nanocoin.createTransaction(new Transaction('address1', 'address2', 100));
nanocoin.createTransaction(new Transaction('address1', 'address2', 50));

nanocoin .minePendingTransaction('xaviers-address');