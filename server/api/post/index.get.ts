export default defineEventHandler(async (event) => {
  const posts = await event.context.prisma.post.findMany();

  return posts;
});
