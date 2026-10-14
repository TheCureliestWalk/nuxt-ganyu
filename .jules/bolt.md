## 2024-10-14 - Prisma PostgreSQL Foreign Key Indexes

**Learning:** In this project's stack (Prisma + PostgreSQL), foreign keys do not automatically create indexes. This can lead to full table scans when querying relations (like fetching todos by userId) or during cascading deletes.
**Action:** Always add explicit `@@index([fieldName])` directives on models with relation foreign keys to ensure database performance remains optimal as tables grow.
