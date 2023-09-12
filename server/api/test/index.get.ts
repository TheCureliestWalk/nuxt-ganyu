import { PrismaClient } from '@prisma/client/edge';
export default eventHandler(async () => {
  const prisma = new PrismaClient();
  return {
    message: await prisma.users.findMany(),
    status: 200,
  };
});
