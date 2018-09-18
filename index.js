const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

/* Helper to list function of an object */
function getMethods(obj)
{
    var res = [];
    for(var m in obj) {
        if(typeof obj[m] == "function") {
            res.push(m)
        }
    }
    return res;
}

/* HD WALLET BITCOIN */

// Create mnemonic (12 words) and then get seed from mnemonic
// Finally get hdnode from seed
// Hints: set up mnemonic, seed and nodeSeed
const mnemonic
const seed
const nodeSeed
const node58
const nodeNeutered58

// Display xpriv and xpub
// Hints: display as base58
console.log('Xpriv: ' + node58)
console.log('Xpub: ' + nodeNeutered58)

// Display 2 first addresses of 2 first accounts
let path1
let path2
let path3
let path4

let neuteredNode

let rawAddress1
let address1
console.log('Address 1:' + address1)

let rawAddress2
let address2
console.log('Address 2:' + address2)

let rawAddress3
let address3
console.log('Address 3:' + address3)

let rawAddress4
let address4
console.log('Address 4:' + address4)

/* ORIGINAL WALLET BITCOIN */

// Create a random bitcoin address by generatong random wif (on testnet)
// Use bitcoinjs lib
const testnet = bitcoin.networks.testnet

const keyPair
const wif
const address

// Display both wif and address and keep it safe
// Fund it with bitcoin testnet faucet
console.log('WIF: ' + wif)
console.log('Address: ' + address)
