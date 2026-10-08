## 2023-10-08 - Prisma PostgreSQL Foreign Key Indexes

**Learning:** Prisma does not automatically create indexes for foreign keys in PostgreSQL. This causes full table scans on related queries, leading to performance bottlenecks.
**Action:** Always add explicit `@@index([foreignKey])` directives to Prisma models containing relations in PostgreSQL environments.
