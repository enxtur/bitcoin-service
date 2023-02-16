import { Router } from "express";
import { bitcoinClient } from "../libs/bitcoin-core";

export const getUtxoOutputsRouter = Router().get("/utxo-outputs/:address", async (req, res) => {
  const { address } = req.params;
  try {
    const result = await bitcoinClient.listUnspent(0, 9999999, [address]);
    res.json(result);
  } catch(e: any) {
    res.status(500).json({ error: e.message });
  }
});