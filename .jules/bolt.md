## 2024-03-24 - [Avoid Unpaginated Full Data Fetches for Summary UIs]

**Learning:** Found that `server/api/post/index.get.ts` was doing a `prisma.post.findMany()` with no arguments, retrieving all fields of all posts. The UI (`components/PostBox.vue`) only displays the 10 latest posts' titles. This wastes DB resources, memory, and network bandwidth when a collection grows.
**Action:** When working on summary lists or dashboard views in this codebase, explicitly limit the items (`take: 10`), sort by recency (`orderBy: { createdAt: 'desc' }`), and selectively fetch only the required fields using `select` in Prisma queries.
