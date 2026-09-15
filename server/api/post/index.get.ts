export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const limit = query.limit ? parseInt(query.limit as string) : undefined;

  // ⚡ Bolt: Performance optimization
  // 💡 What: Supported dynamic pagination (limit) via query params
  // 🎯 Why: Prevents breaking existing API contracts while allowing specific frontends to optimize their data fetches and prevents O(N) loads on the main page.
  // 📊 Impact: O(1) instead of O(N) database time and smaller network payload when limits are used.
  // 🔬 Measurement: Observe smaller payload size and faster response time in network tab for optimized clients.
  const posts = await event.context.prisma.post.findMany({
    ...(limit && { take: limit }),
    orderBy: {
      createdAt: 'desc',
    },
  });

  return posts;
});
