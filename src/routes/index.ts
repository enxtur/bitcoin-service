import { Router } from "express";
import { getBalanceRouter } from "./get-balance";
import { getTransactionRouter } from "./get-transaction";
import { getUtxoOutputsRouter } from "./get-utxo-outputs";
import { importAddressRouter } from "./import-address";
import { importMultiRouter } from "./import-multi";
import { sendRawTransactionRouter } from "./send-raw-transaction";
import { getBlockCountRouter } from "./get-block-count";

export const router = Router();

router.use(getUtxoOutputsRouter);
router.use(importAddressRouter);
router.use(importMultiRouter);
router.use(sendRawTransactionRouter);
router.use(getBalanceRouter);
router.use(getTransactionRouter);
router.use(getBlockCountRouter);