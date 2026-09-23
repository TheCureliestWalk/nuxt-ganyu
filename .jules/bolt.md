## 2024-05-24 - Prisma Foreign Key Indexes in PostgreSQL

**Learning:** Prisma does not auto-create indexes on foreign keys in this PostgreSQL project. Missing indexes on foreign keys (like `userId` in `UserSession`, `authorId` in `Post`, etc.) can lead to full table scans on relational queries, causing significant performance bottlenecks.
**Action:** Always ensure foreign key relations have corresponding `@@index([fieldName])` directives on the model block to prevent full table scans and optimize query performance.
