## 2024-10-22 - Missing Foreign Key Indexes in Prisma Postgres

**Learning:** In this codebase, Prisma is used with PostgreSQL which does not automatically create indexes on foreign key columns. Queries filtering by relations (like `findMany({ where: { userId } })` in `server/api/todo/index.get.ts`) can cause full table scans.
**Action:** Always add `@@index([foreignKeyId])` to models with relations to ensure index lookups instead of full table scans when querying by foreign keys.
