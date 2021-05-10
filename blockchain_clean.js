
const SHA256 = require('crypto-js/sha256');
const BlockClass = require('./block.js');
const bitcoinMessage = require('bitcoinjs-message');

class Blockchain {
    constructor() {
        this.chain = [];
        this.height = -1;
        this.initializeChain();
    }


    async initializeChain() {
        if( this.height === -1){
            let block = new BlockClass.Block({data: 'Genesis Block'});
            await this._addBlock(block);
        }
    }


    getChainHeight() {
        return new Promise((resolve, reject) => {
            resolve(this.height);
        });
    }


    _addBlock(block) {
        let self = this;
        return new Promise(async (resolve, reject) => {
          block.height = self.chain.length;
          block.time = new Date().getTime().toString().slice(0,-3);
          if(self.chain.length>0) {
            block.previousBlockHash = self.chain[self.chain.length-1].hash;
            }
          block.hash = SHA256(JSON.stringify(block)).toString();
          self.chain.push(block);
          resolve(console.log("Block Added", block.hash));
          } catch (err) {
             reject(new Error(err));
          })




    requestMessageOwnershipVerification(address) {
        return new Promise((resolve) => {
          var keyPair = bitcoin.ECPair.fromWIF('15Lp5eWX1xVhUVDyAxThPTaTVXPxUh522L')
          var privateKey = keyPair.privateKey
          var message = 'This is an example of a signed message.'

          var signature = bitcoinMessage.sign(message, privateKey, keyPair.compressed)
          console.log(signature.toString('base64'))

          });
        }


    submitStar(address, message, signature, star) {
        let self = this;
        return new Promise(async (resolve, reject) => {

        });
    }


    getBlockByHash(hash) {
        let self = this;
        return new Promise((resolve, reject) => {

        });
    }


    getBlockByHeight(height) {
        let self = this;
        return new Promise((resolve, reject) => {
            let block = self.chain.filter(p => p.height === height)[0];
            if(block){
                resolve(block);
            } else {
                resolve(null);
            }
        });
    }


    getStarsByWalletAddress (address) {
        let self = this;
        let stars = [];
        return new Promise((resolve, reject) => {

        });
    }


    validateChain() {
        let self = this;
        let errorLog = [];
        return new Promise(async (resolve, reject) => {

        });
    }

}

module.exports.Blockchain = Blockchain;
