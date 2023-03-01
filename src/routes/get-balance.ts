import { Router } from "express";
import { bitcoinClient } from "../libs/bitcoin-core";

export const getBalanceRouter = Router().get("/balance/:address", async (req, res) => {
  try {
    const balance = await bitcoinClient.getReceivedByAddress(req.params.address, 1);
    res.json({ balance });
  } catch(e: any) {
    res.status(500).json({ error: e.message });
  }
});