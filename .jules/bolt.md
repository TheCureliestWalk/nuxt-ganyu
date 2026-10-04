## 2024-05-24 - Prisma PostgreSQL Foreign Key Indexing

**Learning:** In this application's architecture using Prisma with PostgreSQL, foreign keys (like `userId` on `Todo` or `authorId` on `Post`) do not automatically get database indexes. This causes silent O(N) full table scans when querying relations (e.g., fetching a user's todos).
**Action:** Always manually add `@@index([foreignKeyId])` to Prisma models when defining relations in PostgreSQL projects to ensure O(1) or O(log N) lookup times.
