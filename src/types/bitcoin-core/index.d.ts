declare module "bitcoin-core" {

  interface Transaction {
    txid: string;
    confirmations: number;
  }

  export default class BitcoinCore {
    constructor(config: any);
    getBestBlockHash(): Promise<string>;
    getBlock(blockHash: string): Promise<any>;
    getUnspentTransactionOutputs(outpoints: {
      id: string;
      index: number;
    }[], options: {
      extenstion: "json" | "hex" | "bin";
    }): Promise<any>;
    listUnspent(
      minConfirmatin?: number,
      maxConfirmation?: number,
      addresses?: string[],
      includeUnsafe?: boolean,
      queryOptions?: {
        minimumAmount?: number;
        maximumAmount?: number;
        maximumCount?: number;
        minimumSumAmount?: number;
      }
    ): Promise<any>;
    importAddress(
      address: string,
      label?: string,
      rescan?: boolean,
      p2sh?: boolean
    ): Promise<void>;
    importMulti(
      requests: {
        scriptPubKey: {
          address: string;
        };
        timestamp: number;
        label: string;
      }[],
      options: {
        rescan: boolean;
      }
    ): Promise<{ success: boolean; }[]>;
    sendRawTransaction(hex: string): Promise<string>;
    getReceivedByAddress(
      address: string,
      minConfirmation?: number = 0
    ): Promise<number>;
    getTransaction(txid: string, includeWatchonly?: boolean, verbose?: boolean): Promise<Transaction>;
  }
}