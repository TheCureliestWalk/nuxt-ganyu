## 2026-10-23 - Prisma PostgreSQL Foreign Key Indexes

**Learning:** Prisma does not auto-create indexes on foreign keys in this PostgreSQL project, leading to full table scans when querying relations.
**Action:** Always ensure foreign key relations have corresponding `@@index([fieldName])` directives on the model block to prevent full table scans and optimize query performance.
