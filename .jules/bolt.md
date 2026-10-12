## 2024-05-24 - Missing Foreign Key Indexes

**Learning:** Prisma does not auto-create indexes for foreign keys in PostgreSQL. This causes O(N) full table scans when querying relations (e.g., fetching Todos by `userId`).
**Action:** Always add `@@index([foreignKeyId])` directives on relation fields in `schema.prisma` to ensure O(log N) query performance.
