## 2024-11-20 - Prisma PostgreSQL Foreign Key Scans
**Learning:** Prisma with PostgreSQL in this codebase does NOT automatically create indexes for foreign keys. Leaving them out results in full table scans when traversing nested relations or filtering by relations.
**Action:** Always add `@@index([fieldName])` explicitly to models containing foreign keys (e.g., `userId` or `authorId`) referencing other tables to ensure index usage.
