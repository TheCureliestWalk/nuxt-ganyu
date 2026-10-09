## 2024-05-24 - Prisma PostgreSQL Foreign Key Indexes

**Learning:** Prisma does not automatically create database indexes on foreign keys (like `@relation`) when using PostgreSQL. This can lead to silent performance bottlenecks (full table scans) when querying relations or filtering by foreign IDs.
**Action:** Always manually append `@@index([foreignKeyId])` to the model definition for any `@relation` fields.
