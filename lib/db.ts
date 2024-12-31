import { PrismaClient } from '@prisma/client';

interface CustomGlobal extends Global {
  __prisma: PrismaClient | undefined;
}

declare global {
  let __prisma: PrismaClient | undefined;
}

const db = (globalThis as unknown as CustomGlobal).__prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  (globalThis as unknown as CustomGlobal).__prisma = db;
}

export default db;

