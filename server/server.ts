import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import { contactRoutes } from './routes/contact.routes.js';
import { errorHandler } from './middleware/error.middleware.js';
import { aiRoutes } from './routes/ai.routes.js';

const app = express();

// Middleware
app.use(cors({ origin: env.FRONTEND_URL }));
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/ai', aiRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling
app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${env.PORT}`);
});