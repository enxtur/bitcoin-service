import { Router } from "express";
import Joi from "joi";
import { bitcoinClient } from "../libs/bitcoin-core";
import { validate } from "../middlewares/validator";

const schema = Joi.object({
  hex: Joi.string().required(),
});

type Body = {
  hex: string;
};

export const sendRawTransactionRouter = Router().post("/send-raw-transaction", validate(schema), async (req, res) => {
  const { hex } = req.body as Body;
  try {
    const txid = await bitcoinClient.sendRawTransaction(hex);
    res.json({ txid });
  } catch(e: any) {
    res.status(500).json({ error: e.message });
  }
});