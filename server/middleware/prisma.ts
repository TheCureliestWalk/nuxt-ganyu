import { PrismaClient } from '@prisma/client';

let prisma = new PrismaClient();

// Declare to let IDE knows that prisma is a property of H3EventContext
declare module 'h3' {
  interface H3EventContext {
    prisma: PrismaClient;
  }
}

export default defineEventHandler(async (event) => {
  event.context.prisma = prisma;
});
