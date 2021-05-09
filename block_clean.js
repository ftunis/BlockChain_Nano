

const SHA256 = require('crypto-js/sha256');
const hex2ascii = require('hex2ascii');

class Block {

	constructor(data){
		this.hash = null;
		this.height = 0;
		this.body = Buffer(JSON.stringify(data)).toString('hex');
		this.time = 0;
		this.previousBlockHash = null;
    }


  validate() {
    let self = this;
    return new Promise((resolve, reject) => {
      try {
       // Save in auxiliary variable the current block hash
       const currentHash = self.hash;
       self.hash = null;

       // Recalculate the hash of the Block
       const newHash = SHA256(JSON.stringify(self)).toString();
       // Comparing if the hashes changed
       self.hash = currentHash;
       // Returning the Block is not valid
       resolve(currentHash === newHash);
       // Returning the Block is valid
        } catch (err) {
            reject(new Error(err));
            }
          });
        }


    getBData() {
			let self = this;
			decodedData = hex2ascii(this.body);
			obj = JSON.parse(decodedData);
			if (this.length>0) {
				return(obj);
				}

			}




    }



module.exports.Block = Block;                    // Exposing the Block class as a module
