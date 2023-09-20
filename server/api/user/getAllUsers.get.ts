import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const users = [{ name: 'Iho S.', email: 'ihosomnam4741@gmail.com' }];

  return users;
});
