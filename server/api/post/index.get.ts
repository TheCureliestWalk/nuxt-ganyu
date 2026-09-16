export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const parsedLimit = query.limit ? parseInt(query.limit as string) : undefined;
  const limit =
    parsedLimit !== undefined && !Number.isNaN(parsedLimit)
      ? parsedLimit
      : undefined;

  // Bolt Optimization: Add query params for bounds (limit) and ordering (orderBy: createdAt 'desc')
  // This allows components like PostBox to only fetch what they need without breaking generic consumers.
  const queryOptions: any = {};
  if (limit) {
    queryOptions.take = limit;
  }
  queryOptions.orderBy = {
    createdAt: 'desc',
  };

  const posts = await event.context.prisma.post.findMany(queryOptions);

  return posts;
});
