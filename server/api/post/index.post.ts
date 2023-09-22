import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // check if request has body provided
  if (!body?.title || !body?.content || !body?.authorId) {
    setResponseStatus(event, 400);
    return {
      message:
        "Please ensure the request has 'title', 'content', and 'authorId' provided.",
    };
  }
  const post = await event.context.prisma.post.create({
    data: {
      title: body?.title,
      content: body?.content,
      authorId: body?.authorId,
    },
  });

  return post;
});
