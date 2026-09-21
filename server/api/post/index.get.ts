export default defineEventHandler(async (event) => {
  // Optimization: Parse take/skip query params to prevent fetching all posts unnecessarily.
  // We use getQuery and validate with !Number.isNaN() to prevent 500 errors in Prisma
  // when invalid query values are provided.
  const query = getQuery(event);

  const take = parseInt(query.take as string, 10);
  const skip = parseInt(query.skip as string, 10);

  const options: any = {};
  if (!Number.isNaN(take)) {
    options.take = take;
  }
  if (!Number.isNaN(skip)) {
    options.skip = skip;
  }

  const posts = await event.context.prisma.post.findMany(options);

  return posts;
});
