export default defineEventHandler(async (event) => {
  const cookie = event.context.tokenFromCookie;
  const header = event.context.tokenFromHeader;

  const deleteToken = async (token: string) => {
    await event.context.prisma.userSession.deleteMany({
      where: {
        token,
      },
    });
  };

  await deleteToken(cookie || header);
  deleteCookie(event, 'token');
  return {
    message: 'You have been logged out.',
  };
});
