## 2024-05-24 - Prisma Foreign Key Indexes in PostgreSQL

**Learning:** Prisma does not automatically create database indexes for foreign key relations (like `@relation`) when using PostgreSQL. Without these, queries filtering by foreign keys (e.g., fetching a user's todos or sessions) will result in full table scans, significantly degrading performance as the tables grow.
**Action:** Always explicitly add `@@index([foreignKeyField])` to Prisma models for fields used in relations to ensure efficient lookups and prevent full table scans.
