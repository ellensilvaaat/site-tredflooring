// server/routes/contactRoutes.js
import express from "express";
import { submitContactForm } from "../controllers/FormControllers.js";

const router = express.Router();

router.post("/contact", submitContactForm);

export default router;
