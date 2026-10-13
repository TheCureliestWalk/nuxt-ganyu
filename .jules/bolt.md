## 2023-10-24 - Prisma PostgreSQL Foreign Key Indexing

**Learning:** Prisma does not auto-create indexes on foreign keys in PostgreSQL projects. This can lead to full table scans during relation lookups.
**Action:** Always ensure foreign key relations have corresponding `@@index([fieldName])` directives on the model block to prevent full table scans and optimize query performance.
