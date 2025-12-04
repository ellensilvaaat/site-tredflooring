// routes/sampleRequestRoutes.js
import express from 'express';
import { submitSampleRequest } from '../controllers/sampleRequestController.js';

const router = express.Router();

router.post('/request', submitSampleRequest);

export default router;
