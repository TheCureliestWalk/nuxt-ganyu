export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const todo = await event.context.prisma.todo.findMany({
    where: {
      userId: query.userId as string,
    },
  });

  return todo;
});
