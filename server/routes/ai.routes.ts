import { Router } from 'express';
import { chatWithAI } from '../controllers/ai.controller.js';

export const aiRoutes = Router();

aiRoutes.post('/chat', chatWithAI);