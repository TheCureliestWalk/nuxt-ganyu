export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  // ⚡ Bolt: Parse dynamic pagination parameters to prevent over-fetching
  const takeQuery = parseInt(query.take as string);
  const skipQuery = parseInt(query.skip as string);

  // ⚡ Bolt: Validate parsed numbers to prevent 500 errors from passing NaN to Prisma
  const take = !Number.isNaN(takeQuery) ? takeQuery : undefined;
  const skip = !Number.isNaN(skipQuery) ? skipQuery : undefined;

  const posts = await event.context.prisma.post.findMany({
    take,
    skip,
    // ⚡ Bolt: Sort by creation date descending so limit naturally returns "latest"
    orderBy: { createdAt: 'desc' },
  });

  return posts;
});
