## 2024-05-24 - Missing Database Indexes on Foreign Keys in Prisma

**Learning:** Prisma does not automatically create database indexes for foreign key fields in PostgreSQL. Omitting them can lead to full table scans and significant performance bottlenecks during relation queries or joins on larger datasets.
**Action:** Always explicitly declare `@@index([foreignKeyField])` directives for relational fields in the Prisma schema to maintain optimal query performance.
