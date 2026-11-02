import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { generateAIResponse } from '../services/ai/aiService.js';
import { AppError } from '../middleware/error.middleware.js';

const chatSchema = z.object({
  message: z.string().min(1).max(1000),
  history: z.array(z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string()
  })).max(20) // Keep context window small to save tokens
});

export async function chatWithAI(req: Request, res: Response, next: NextFunction) {
  try {
    const validation = chatSchema.safeParse(req.body);
    if (!validation.success) throw new AppError('Invalid chat data', 400);

    const { message, history } = validation.data;

    // Format history for the AI service
    const formattedHistory = [
      ...history.map(h => ({ role: h.role as 'user' | 'assistant', content: h.content })),
      { role: 'user' as const, content: message }
    ];

    const aiResponse = await generateAIResponse(formattedHistory);

    res.json({ success: true, response: aiResponse });
  } catch (error) {
    next(error);
  }
}