require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note museum coin grace hero food giant'; 
let testAccounts = [
"0x95e026bfb8db9b7044030104be0979705bd83702b1546947d7243097b1c952f0",
"0x9f03867c98f36d1ba6e4acf65139eddd7d9915351c47a2d70736a267e3bd24c0",
"0x780500f73d47db9822a02a651c534e73609c5d095548330101f5e79175c0fdad",
"0xddbeece63d601bd868f46ec1c815e9df6b6eb99e9dcdf695f4bed15bc43c8c1e",
"0xb1c1c1d5102856096ec86e47b464403d0d998966f8339389f2beb1582a98f22b",
"0x8b71c0b20ee9dea7191bbdb3d09826fe679471da888db170ae352762ea3f4747",
"0x2046c7c89e514fb31efe330a2a7d216ada70a78640ddcac05de539a12a9260da",
"0x3fbf7b0accf55ef3d3ee335d1b24967cee8d97c71cdffe65364152b6a887e4c6",
"0x85697673d3e76cb30143e6463eb9a30feda96393eabd8d62169ff2126c9f368e",
"0x7eafb3b98e46ac5ed34430c00bbfa73116126de58ba914fca78372649fb4a2f4"
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
            version: '^0.5.11'
        }
    }
};
