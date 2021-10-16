import { Router } from 'express';
import { Request, Response } from 'express';
import BodyMassIndexRoute from './biology';



const router = Router();

router.get('/health-check', (req: Request, res: Response) => {
  res.json({
    status: 'ok'
  });
});

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'BMI Calculator 1.0.1'
  })
})

router.use(
  '/bmi', BodyMassIndexRoute
)

export default router;
