export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const takeQuery = parseInt(query.take as string);
  const skipQuery = parseInt(query.skip as string);

  const take = !Number.isNaN(takeQuery) ? takeQuery : undefined;
  const skip = !Number.isNaN(skipQuery) ? skipQuery : undefined;

  // Add pagination (take, skip) to prevent loading all posts into memory
  // Order by createdAt desc to get the newest posts first
  const posts = await event.context.prisma.post.findMany({
    take,
    skip,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return posts;
});
