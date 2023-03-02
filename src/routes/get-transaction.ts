import { Router } from "express";
import { bitcoinClient } from "../libs/bitcoin-core";

export const getTransactionRouter = Router().get("/transaction/:txid", async (req, res) => {
  try {
    res.json(await bitcoinClient.getTransaction(req.params.txid));
  } catch(e: any) {
    res.status(500).json({ error: e.message });
  }
});