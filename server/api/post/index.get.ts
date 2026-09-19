export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  // Optimization: Added dynamic pagination (take/skip) to reduce database load
  // and memory usage for large result sets, without breaking existing clients.
  // Validate parsed parameters with !Number.isNaN to avoid Prisma 500 errors.
  const parsedTake = query.take ? parseInt(query.take as string) : undefined;
  const parsedSkip = query.skip ? parseInt(query.skip as string) : undefined;

  const take =
    parsedTake !== undefined && !Number.isNaN(parsedTake)
      ? parsedTake
      : undefined;
  const skip =
    parsedSkip !== undefined && !Number.isNaN(parsedSkip)
      ? parsedSkip
      : undefined;

  const posts = await event.context.prisma.post.findMany({
    ...(take !== undefined && { take }),
    ...(skip !== undefined && { skip }),
  });

  return posts;
});
