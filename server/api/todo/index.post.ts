export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const cookie = event.context.tokenFromCookie;
  const header = event.context.tokenFromHeader;

  // if Token is not provided.
  if (!cookie && !header) {
    setResponseStatus(event, 401);
    return {
      message: 'Unauthorized',
    };
  }

  const todo = await event.context.prisma.todo.create({
    data: {
      userId: event.context.userFromCookie,
      task: body.task,
    },
  });

  return todo;
});
