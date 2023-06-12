import express from 'express';
import config from './config';
import Loaders from './loaders';
import Logger from './loaders/logger';
// import { checkcreateuser } from './middlewares/checkcreateuser';
// import { handleCreateUser } from './controllers/handlecreateuser';

async function startServer() {
  const app = express();

  await Loaders({ expressApp: app });

  app
    .listen(config.port, () => {
      Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    })
    .on('error', err => {
      Logger.error(err);
      process.exit(1);
    });

  // this works here but commented out
  // app.post('/signup', checkcreateuser, handleCreateUser);
}
startServer();
