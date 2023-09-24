export default defineEventHandler(async (event) => {
  // don't use await, otherwise, it will error: HTTP method not allowed.
  const body = readBody(event);

  const todo = await event.context.prisma.todo.findMany({
    where: {
      userId: body.userId,
    },
  });

  return todo;
});
