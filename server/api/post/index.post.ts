import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const post = await event.context.prisma.post.create({
    data: {
      title: body?.title,
      content: body?.content,
      authorId: body?.authorId,
    },
  });

  return post;
});
