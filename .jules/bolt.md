## 2026-09-25 - Prisma Foreign Key Indexing
**Learning:** Prisma does not automatically generate database indexes for foreign keys in PostgreSQL, unlike some other ORMs. This causes full table scans on relations, leading to significant performance degradation at scale.
**Action:** Always explicitly define `@@index([foreignKey])` in `schema.prisma` for every relation to prevent O(N) lookup penalties.
