import * as express from 'express';
import chortleRouter from './chortles';

const router = express.Router();

router.use('/chortles', chortleRouter);

export default router; 