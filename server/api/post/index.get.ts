export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const parsedTake = query.take
    ? parseInt(query.take as string, 10)
    : undefined;
  const parsedSkip = query.skip
    ? parseInt(query.skip as string, 10)
    : undefined;

  const take =
    parsedTake !== undefined && !Number.isNaN(parsedTake)
      ? parsedTake
      : undefined;
  const skip =
    parsedSkip !== undefined && !Number.isNaN(parsedSkip)
      ? parsedSkip
      : undefined;

  // Added dynamic pagination (take, skip) to prevent fetching all posts at once.
  // This avoids potential performance bottlenecks and OOM errors as the database grows,
  // without introducing breaking changes since take/skip are undefined by default.
  const posts = await event.context.prisma.post.findMany({
    take,
    skip,
  });

  return posts;
});
