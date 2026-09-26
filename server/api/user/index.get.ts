export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  // Parse pagination parameters dynamically to avoid unbounded queries
  // which can consume excessive memory and database resources.
  const take = parseInt(query.take as string, 10);
  const skip = parseInt(query.skip as string, 10);

  const prismaQuery: { take?: number; skip?: number } = {};

  if (!Number.isNaN(take)) {
    prismaQuery.take = take;
  } else {
    // Default limit to prevent unbounded queries if client omits 'take'
    prismaQuery.take = 50;
  }

  if (!Number.isNaN(skip)) {
    prismaQuery.skip = skip;
  }

  const users = await event.context.prisma.user.findMany(prismaQuery);

  return users;
});
