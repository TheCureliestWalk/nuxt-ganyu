export default defineEventHandler(async (event) => {
  const todo = await event.context.prisma.todo.findMany({
    where: {
      userId: event.context.userFromCookie,
    },
  });

  return todo;
});
