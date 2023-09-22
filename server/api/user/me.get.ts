import prisma from '@/server/_app/prisma';

export default defineEventHandler(async (event) => {
  const cookie = event.context.tokenFromCookie;
  const header = event.context.tokenFromHeader;

  // if Token is not provided.
  if (!cookie && !header) {
    setResponseStatus(event, 401);
    return {
      message: 'Unauthorized',
    };
  }

  const me = await prisma.userSession
    .findUnique({
      where: {
        token: cookie || header,
      },
    })
    .user();

  return me;
});
