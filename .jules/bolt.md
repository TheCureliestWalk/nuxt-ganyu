## 2023-10-04 - PostgreSQL Foreign Key Indexing
**Learning:** In this Prisma/PostgreSQL stack, foreign keys are not automatically indexed by default. This can lead to silent N+1 performance bottlenecks and full table scans on relationships (like `UserSession.userId` or `Post.authorId`).
**Action:** Always explicitly add `@@index([fieldName])` to foreign key relationships in `schema.prisma` for this codebase.
