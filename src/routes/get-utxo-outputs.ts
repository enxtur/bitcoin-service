import { Router } from "express";
import Joi from "joi";
import { bitcoinClient } from "../libs/bitcoin-core";
import { validate } from "../middlewares/validator";

const schema = Joi.object({
  address: Joi.string().required(),
})

type Query = {
  address: string;
}

export const getUtxoOutputsRouter = Router().get("/utxo-outputs", validate(schema), async (req, res) => {
  const { address } = req.query as Query;
  try {
    const result = await bitcoinClient.listUnspent(0, 9999999, [address]);
    res.json(result);
  } catch(e: any) {
    res.status(500).json({ error: e.message });
  }
});