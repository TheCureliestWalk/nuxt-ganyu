## 2024-10-17 - Add Foreign Key Indexes

**Learning:** Prisma doesn't auto-create database indexes on foreign keys in PostgreSQL by default. This leads to full table scans during relation lookups (e.g. `user.posts` or `user.sessions`).
**Action:** Always add `@@index([foreignKey])` directives on child models to ensure optimal query performance for relation joins.
