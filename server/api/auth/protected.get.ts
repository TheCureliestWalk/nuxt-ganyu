export default defineEventHandler(async (event) => {
  const userToken = getHeader(event, 'Authorization');

  // check if request has token header provided
  if (!userToken) {
    setResponseStatus(event, 401);
    return {
      message: 'no token found.',
    };
  }

  const token = await event.context.prisma.userSession.findFirst({
    where: {
      token: userToken.slice(7),
    },
  });

  // check if token is not found on database
  if (token === null) {
    setResponseStatus(event, 401);
    return {
      message: 'invalid token.',
    };
  }

  return {
    token,
  };
});
