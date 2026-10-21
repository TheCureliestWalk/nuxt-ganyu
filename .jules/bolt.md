## 2024-05-18 - Missing Foreign Key Indexes in Prisma

**Learning:** Prisma does not auto-create database indexes on foreign keys in PostgreSQL, which can lead to full table scans on relational queries.
**Action:** Always ensure foreign key relations have corresponding `@@index([fieldName])` directives on the model block.
