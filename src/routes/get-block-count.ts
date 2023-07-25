import { Router } from "express";
import { bitcoinClient } from "../libs/bitcoin-core";

export const getBlockCountRouter = Router().get("/block-count", async (req, res) => {
  try {
    const blockCount = await bitcoinClient.getBlockCount();
    res.json({ 'block-count': blockCount });
  } catch(e: any) {
    res.status(500).json({ error: e.message });
  }
});