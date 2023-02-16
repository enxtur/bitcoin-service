# Bitcoin Core API Service

This is a Node.js API service for interacting with a bitcoind instance using bitcoin-core.

## Installation

1. Install Node.js and npm (if not already installed).
2. Install the required dependencies by running `npm install`.
3. Create a `.env` file based on the `.env.example` file, and update the values to configure the connection settings for your bitcoind instance.

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
