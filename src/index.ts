import http from "http";
import { app } from "./app";
import { config } from "./config";
import * as zeromq from "./zeromq";
import { createSocketServer } from "./websocket";

async function start() {
  const server = http.createServer(app);
  const io = createSocketServer(server);
  zeromq.start(io);
  server.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
  });
}

start();