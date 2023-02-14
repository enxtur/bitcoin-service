import { Router } from "express";
import Joi from "joi";
import { bitcoinClient } from "../libs/bitcoin-core";
import { validate } from "../middlewares/validator";

const schema = Joi.object({
  address: Joi.string().required(),
  label: Joi.string().required(),
});

type Body = {
  address: string;
  label: string;
};

export const importAddressRouter = Router().post("/import-address", validate(schema), async (req, res) => {
  const { address, label } = req.body as Body;
  try {
    await bitcoinClient.importAddress(address, label, true);
    res.json({ success: true });
  } catch(e: any) {
    res.status(500).json({ error: e.message });
  }
});