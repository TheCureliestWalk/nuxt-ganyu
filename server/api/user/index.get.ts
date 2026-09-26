export default defineEventHandler(async (event) => {
  const users = await event.context.prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      username: true,
      avatar: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return users;
});
