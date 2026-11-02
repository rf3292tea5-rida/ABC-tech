// import { PrismaClient } from '@prisma/client';

// export const prisma = new PrismaClient();


import { PrismaClient } from '@prisma/client';
import { env } from './env.js';

export const prisma = env.DATABASE_URL 
  ? new PrismaClient() 
  : null;