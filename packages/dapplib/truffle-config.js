require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski strong rival outside pumpkin install define army gasp'; 
let testAccounts = [
"0xc0169aebdec65a4f47836c2b693d79d434a496496330b84663f7ceeb4eb2b26a",
"0xda0c407919577d10baf55c628066824560203cfaa18a20ce9018dca7e4c5d07f",
"0xd948346726c64732c2d8e4a3f8a79330f37e0e0fab6c6501c3e1e5f388072945",
"0xbce6cb4da2fdf211812d17ac34d6acefcd2fd976e90574e948d2db6eea842285",
"0xfc333f71d3ceaa84f7b17ab13e528100adc78beea1e228924d33f1eeff5c4740",
"0x60599e6c52cdbf351da728b8c282d6cc2259c4a1e0141303782d9edef448af7f",
"0x641424bca386a83ee2e181475378aaaa40f76bfbbe4731c0a8d7979db2d69ba9",
"0x5f5bb0faff214c6edb7eafeb7c0ec244b5c08e914b13b838ecf0ae5366bbcc67",
"0x4f2a00738ae5fff29204d8b97c0e7085e964adc6ccef9a38ff4fd452d8a7fd5f",
"0xfaea9fbf4f69243e2d9798ae36ddd43c393f38bc5a53d9b394fc2a0c5bf9972c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

