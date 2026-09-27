## 2024-05-24 - Unbounded Database Queries

**Learning:** Unbounded database queries (`prisma.findMany()` without limit parameters) can cause significant performance bottlenecks and memory bloat, especially as table sizes grow. In a Nuxt API handler, the frontend might omit pagination parameters.
**Action:** Always validate and fallback to a default pagination limit (e.g., `take: 50`) when using `findMany` to prevent uncontrolled queries. However, do NOT apply hard limits if the frontend isn't updated to handle pagination.

## 2024-05-24 - Missing Indexes on Foreign Keys

**Learning:** Prisma does not automatically create indexes on foreign keys in PostgreSQL. This causes performance issues when joining or filtering on foreign key relations.
**Action:** Always add `@@index([fk_field])` on foreign key fields to optimize query performance in Prisma.
