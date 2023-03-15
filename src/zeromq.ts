import { Server } from "socket.io";
import * as zmq from "zeromq";
import { config } from "./config";
import { bitcoinClient } from "./libs/bitcoin-core";

export async function start(io: Server) {
  const sock = new zmq.Subscriber();
  sock.connect(config.zmq.uri);
  sock.subscribe("hashtx");
  console.log(`Subscriber connected to ${config.zmq.uri}`);
  for await (const [topic, msg] of sock) {
    if (topic.toString() === "hashtx") {
      onHashtx(io, msg.toString("hex"));
    }
  }
}

async function onHashtx(io: Server, txHash: string) {
  try {
    const trx = await bitcoinClient.getTransaction(txHash);
    if (trx.confirmations > 0) {
      io.to("hashtx").emit("hashtx", trx);
    }
  } catch(e: any) {
    if (e.message === "Invalid or non-wallet transaction id") {
      // ignore non imported address transactions
    } else {
      throw e;
    }
  }
}

