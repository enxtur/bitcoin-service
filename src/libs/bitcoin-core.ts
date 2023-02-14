import BitcoinCore from "bitcoin-core";
import { config } from "../config";

export const bitcoinClient = new BitcoinCore(config.rpc);