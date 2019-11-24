const port = process.env.HOST_PORT || 9090

module.exports = {
  networks: {
    mainnet: {
      // Don't put your private key here:
      privateKey: process.env.PRIVATE_KEY_MAINNET,
      /*
Create a .env file (it must be gitignored) containing something like

  export PRIVATE_KEY_MAINNET=6abfa966b822ddc96f534f9b0b2b655e025c21a2214b6f4d4852be1c77bbb92e

Then, run the migration with:

  source .env && tronbox migrate --network mainnet

*/
      userFeePercentage: 100,
      feeLimit: 1e8,
      fullHost: "https://sc-api.unichain.world",
      network_id: "1"
    },
    development: {
      // For trontools/quickstart docker image
      privateKey: '21aac7f4b836a09684d51ab52aa4995cf484bc46aa983d92c0f2d74666276a7a',
      userFeePercentage: 50,
      feeLimit: 1e8,
      fullHost: 'http://127.0.0.1:' + port,
      network_id: "*"
    }
  }
}