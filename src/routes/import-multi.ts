import { Router } from "express";
import Joi from "joi";
import { bitcoinClient } from "../libs/bitcoin-core";
import { validate } from "../middlewares/validator";

const schema = Joi.object({
  requests: Joi.array().items(
    Joi.object({
      address: Joi.string().required(),
    })
  ).required(),
});

type Body = {
  requests: {
    address: string;
  }[];
};

export const importMultiRouter = Router().post("/import-multi", validate(schema), async (req, res) => {
  const { requests } = req.body as Body;
  try {
    await bitcoinClient.importMulti(requests.map(request => ({
      scriptPubKey: { address: request.address },
      timestamp: new Date().getTime(),
      label: request.address,
    })), { rescan: false });
    res.json({ success: true });
  } catch(e: any) {
    res.status(500).json({ error: e.message });
  }
});