import * as log from './lib/logger';
import express from 'express';

import router from './routes';
import cors from 'cors'

/**
 * BMI Calculator
 */

const port = 5000;
const app = express()
app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => log.info('BMI Calculator is now running'));
}

export default app