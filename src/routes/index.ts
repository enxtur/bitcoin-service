import { Router } from "express";
import { getUtxoOutputsRouter } from "./get-utxo-outputs";
import { importAddressRouter } from "./import-address";
import { importMultiRouter } from "./import-multi";

export const router = Router();

router.use(getUtxoOutputsRouter);
router.use(importAddressRouter);
router.use(importMultiRouter);