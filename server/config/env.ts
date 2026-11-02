import { z } from 'zod';
import dotenv from 'dotenv';

// Load .env from the root directory (since server is in /server)
dotenv.config({ path: '../.env' });

// const envSchema = z.object({
//   PORT: z.coerce.number().default(3001),
//   DATABASE_URL: z.string(),
//   RESEND_API_KEY: z.string().optional(),
//   FRONTEND_URL: z.string().default('http://localhost:5173'),
// });


const envSchema = z.object({
  PORT: z.coerce.number().default(3001),
  DATABASE_URL: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  OPENAI_API_KEY: z.string().optional(), // <-- ADD THIS
  FRONTEND_URL: z.string().default('http://localhost:5173'),
});

export const env = envSchema.parse(process.env);