import { Router } from "express";
import { bitcoinClient } from "../libs/bitcoin-core";

export const getBalanceRouter = Router().get("/balance/:address", async (req, res) => {
  try {
    // const balance = await bitcoinClient.getReceivedByAddress(req.params.address, 1);
    // res.json({ balance });
    const utxos = await bitcoinClient.listUnspent(1, 9999999, [req.params.address]);
    let balance = 0;
    for (const utxo of utxos) {
      balance += Number(utxo.amount);
    }
    res.json({ balance })
  } catch(e: any) {
    res.status(500).json({ error: e.message });
  }
});