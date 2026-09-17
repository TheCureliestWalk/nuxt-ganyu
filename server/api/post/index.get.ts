export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const limit = query.limit ? parseInt(query.limit as string) : undefined;

  // ⚡ Bolt Optimization: Add dynamic take limit from query to avoid large queries
  const posts = await event.context.prisma.post.findMany({
    take: limit,
  });

  return posts;
});
