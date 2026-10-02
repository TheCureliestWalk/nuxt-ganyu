## 2024-05-24 - Missing indexes on foreign keys

**Learning:** Prisma does not auto-create indexes on foreign keys in PostgreSQL. This can cause performance bottlenecks and full table scans on relation lookups.
**Action:** Always ensure foreign key relations have corresponding `@@index([fieldName])` directives on the model block to prevent full table scans and optimize query performance.
