## 2024-05-24 - Prisma Foreign Key Indexes in PostgreSQL
**Learning:** Prisma does not automatically generate database indexes for standard foreign keys (`@relation`) when targeting PostgreSQL. This can silently cause major performance bottlenecks via full-table scans when querying relational data (e.g., finding all posts for a user).
**Action:** Always manually append the `@@index([foreignKeyField])` block to models containing relationships in `prisma/schema.prisma`.
