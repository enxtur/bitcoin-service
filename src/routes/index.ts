import { Router } from "express";
import { getUtxoOutputsRouter } from "./get-utxo-outputs";
import { importAddressRouter } from "./import-address";
import { importMultiRouter } from "./import-multi";
import { sendRawTransactionRouter } from "./send-raw-transaction";

export const router = Router();

router.use(getUtxoOutputsRouter);
router.use(importAddressRouter);
router.use(importMultiRouter);
router.use(sendRawTransactionRouter);