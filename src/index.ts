import * as log from './lib/logger';
import express from 'express';

import router from './routes';

/**
 * Online ordering API Service.
 */


const port = 5000;
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => log.info('Online ordering service is now running'));
}

export default app