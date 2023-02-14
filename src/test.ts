import { bitcoinClient } from "./libs/bitcoin-core";
import { wallet1, wallet2 } from "./wallets";

async function importAddress() {
  const wallet = wallet2
  const result = await bitcoinClient.importAddress(wallet.address, wallet.label, true);
  console.log(result);
}

async function importMultiAddress() {
  const wallets = [wallet1.address, wallet2.address];
  const result = await bitcoinClient.importMulti(wallets.map((wallet) => ({
    scriptPubKey: {
      address: wallet
    },
    timestamp: 0,
    label: wallet,
  })), { rescan: true });
}

async function listUnspent(address: string) {
  const result = await bitcoinClient.listUnspent(
    0,
    9999999,
    [address]
  );
  console.log(result);
}

async function test () {
  // await importAddress();
  // await importMultiAddress();
  await listUnspent(wallet1.address);
}

test();