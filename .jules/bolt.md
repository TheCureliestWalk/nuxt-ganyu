## 2024-10-05 - Prisma PostgreSQL Foreign Key Indexes

**Learning:** Prisma does not auto-create indexes on foreign keys in this PostgreSQL project. This can lead to inefficient full table scans during relation queries.
**Action:** Always ensure foreign key relations have corresponding `@@index([fieldName])` directives on the model block to prevent full table scans and optimize query performance.
