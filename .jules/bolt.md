## 2024-05-15 - Missing Foreign Key Indexes in PostgreSQL with Prisma

**Learning:** Prisma does not automatically create indexes on foreign keys in PostgreSQL projects. This can lead to full table scans and significant performance degradation on relationships like `UserSession.userId` or `Post.authorId`, especially when tables grow large.
**Action:** Always explicitly add `@@index([fieldName])` on relation foreign key fields in `schema.prisma` (e.g., `@@index([userId])` on `UserSession` and `Todo`, and `@@index([authorId])` on `Post`).
