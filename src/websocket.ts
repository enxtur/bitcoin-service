import http from "http";
import { Server, Socket } from "socket.io";

export function createSocketServer(http: http.Server): Server {
  return new Server(http).on("connection", onConnection);
}

async function onConnection(socket: Socket) {
  socket.on("subscribe", () => socket.join("hashtx"));
  socket.on("disconnect", () => socket.leave("hashtx"));
}