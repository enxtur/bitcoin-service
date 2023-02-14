import { app } from "./app";
import { config } from "./config";

async function start() {
  app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
  });
}

start();