## 2024-05-24 - PostgreSQL Foreign Key Indexing

**Learning:** Prisma does not auto-create indexes on foreign keys in this PostgreSQL project. Relational queries on tables like `UserSession`, `Post`, and `Todo` can lead to full table scans and performance bottlenecks without explicit indexes.
**Action:** Always manually add explicit `@@index([fieldName])` directives for foreign key relations in `prisma/schema.prisma` to optimize database query performance.
