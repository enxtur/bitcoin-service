# Bitcoin Core HTTP RPC Wrapper Service

This is a Node.js API service that acts as a wrapper for the Bitcoin Core HTTP RPC interface, providing a simple and convenient way to interact with a [Bitcoin Core](https://bitcoin.org/en/bitcoin-core/) instance using [bitcoin-core](https://www.npmjs.com/package/bitcoin-core).



## Installation

1. Install Node.js and npm (if not already installed).
2. Install Bitcoin Core by following the [instructions on the Bitcoin Core website](https://bitcoin.org/en/full-node). Make sure to configure the `bitcoin.conf` file with the appropriate settings, such as the RPC username and password.
3. Install the required dependencies by running `npm install`.
4. Create a `.env` file based on the `.env.example` file, and update the values to configure the connection settings for your Bitcoin Core instance.

## Configuration

The `.env` file contains the following configuration options:

- `RPC_USER`: The username for the RPC connection to bitcoind.
- `RPC_PASSWORD`: The password for the RPC connection to bitcoind.
- `RPC_HOST`: The host where bitcoind is running (default: `127.0.0.1`).
- `RPC_PORT`: The port on which the RPC interface is listening (default: `8332`).
- `NETWORK`: The Bitcoin network to use (default: `mainnet`).

## Usage

To start the API service, run the following command:

`npm start`


This will start the API service on port 3000 by default. You can change the port by setting the `PORT` environment variable.

### Endpoints

#### GET /api/balance/:address

Returns the balance of the specified address.

#### GET /api/utxo-outputs/:address

Returns the unspent transaction outputs (UTXOs) of the specified address.

#### POST /api/import-address

Imports the specified address to the bitcoind wallet.

#### POST /api/import-multi

Imports multiple addresses to the bitcoind wallet.

#### POST /api/send-raw-transaction

Sends a raw Bitcoin transaction to the network.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request.
