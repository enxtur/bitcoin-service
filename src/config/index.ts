function configure() {
  if (!process.env.RPC_NETWORK) {
    throw new Error('RPC_NETWORK not set');
  }
  if (!process.env.RPC_HOST) {
    throw new Error('RPC_HOST not set');
  }
  if (!process.env.RPC_PORT) {
    throw new Error('RPC_PORT not set');
  }
  if (!process.env.RPC_USER) {
    throw new Error('RPC_USER not set');
  }
  if (!process.env.RPC_PASS) {
    throw new Error('RPC_PASS not set');
  }
  if (!process.env.ZMQ_URI) {
    throw new Error('ZMQ_URI not set');
  }
  return {
    port: process.env.PORT || 3000,
    rpc: {
      network: process.env.RPC_NETWORK,
      host: process.env.RPC_HOST,
      port: process.env.RPC_PORT,
      username: process.env.RPC_USER,
      password: process.env.RPC_PASS,
    },
    zmq: {
      uri: process.env.ZMQ_URI,
    },
  };
}

export const config = configure();