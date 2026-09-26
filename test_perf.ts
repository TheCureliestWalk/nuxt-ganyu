import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Add some dummy posts
  console.log('Seeding dummy data...');
  const users = await prisma.user.findMany();
  if (users.length === 0) {
    await prisma.user.create({
      data: {
        email: 'test@example.com',
        username: 'test',
        password: 'password123',
      },
    });
  }
  const user = await prisma.user.findFirst();

  // Seed 1000 posts
  const postCount = await prisma.post.count();
  if (postCount < 1000) {
    const data = [];
    for (let i = 0; i < 1000 - postCount; i++) {
      data.push({
        title: `Post ${i}`,
        content: `Content ${i}`,
        authorId: user.id,
      });
    }
    await prisma.post.createMany({ data });
  }

  // Measure unbounded query
  const startUnbounded = performance.now();
  await prisma.post.findMany();
  const endUnbounded = performance.now();

  // Measure bounded query
  const startBounded = performance.now();
  await prisma.post.findMany({ take: 10 });
  const endBounded = performance.now();

  console.log(`Unbounded (1000+ posts): ${endUnbounded - startUnbounded}ms`);
  console.log(`Bounded (10 posts): ${endBounded - startBounded}ms`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
