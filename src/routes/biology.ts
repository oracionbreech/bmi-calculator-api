import { Router } from 'express';
import calculateBodyMassIndexImperial from '../controllers/calculateBodyMassIndexImperial';
import calculateBodyMassIndexMetric from '../controllers/calculateBodyMassIndexMetric';

const router = Router();
const BodyMassIndexRoute = router
    .post('/imperial', calculateBodyMassIndexImperial)
    .post(
        '/metric', calculateBodyMassIndexMetric
    )
export default BodyMassIndexRoute;
