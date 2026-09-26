export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // check if request has body provided
  if (!body?.title || !body?.content) {
    setResponseStatus(event, 400);
    return {
      message: "Please ensure the request has 'title' and 'content' provided.",
    };
  }

  const token = event.context.token;

  if (!token) {
    setResponseStatus(event, 401);
    return {
      message: 'Unauthorized',
    };
  }

  const userSession = await event.context.prisma.userSession.findUnique({
    where: { token },
  });

  if (!userSession) {
    setResponseStatus(event, 401);
    return {
      message: 'Unauthorized',
    };
  }

  const post = await event.context.prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userSession.userId, // securely infer authorId from session
    },
  });

  return post;
});
