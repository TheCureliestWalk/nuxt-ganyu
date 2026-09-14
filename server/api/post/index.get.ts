export default defineEventHandler(async (event) => {
  // Optimize: Fetch only necessary fields (id, title) for the UI list,
  // limit to the 10 most recent posts, reducing DB load and payload size.
  const posts = await event.context.prisma.post.findMany({
    take: 10,
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      title: true,
    },
  });

  return posts;
});
