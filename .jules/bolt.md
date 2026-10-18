## 2024-10-18 - Missing Foreign Key Indexes in Prisma/PostgreSQL

**Learning:** Prisma does not automatically generate database indexes for foreign key fields in PostgreSQL, which can lead to inefficient full table scans during relation lookups.
**Action:** Always explicitly define `@@index([foreignKeyField])` on models that have foreign key relations to optimize query performance and prevent unindexed joins.
