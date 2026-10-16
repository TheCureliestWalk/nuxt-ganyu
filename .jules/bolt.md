## 2024-05-20 - [Missing Foreign Key Indexes in Prisma]

**Learning:** Prisma does not auto-create indexes on foreign keys in this PostgreSQL project, which can lead to full table scans on related tables (e.g., `Todo`, `UserSession`, `Post`) during join operations or foreign key lookups.
**Action:** Always ensure foreign key relations have corresponding `@@index([fieldName])` directives on the model block to optimize query performance and prevent full table scans.
