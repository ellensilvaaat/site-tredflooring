import express from 'express';
import { submitEmailSubscription } from '../controllers/EmailSubscriptionController.js';

const router = express.Router();
router.post('/subscribe', submitEmailSubscription);
export default router;
