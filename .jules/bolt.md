## 2024-09-24 - Prisma Missing Foreign Key Indexes

**Learning:** Prisma does not auto-create indexes on foreign keys in this PostgreSQL project.
**Action:** Always ensure foreign key relations have corresponding `@@index([fieldName])` directives on the model block to prevent full table scans and optimize query performance.
