## 2024-09-28 - Missing PostgreSQL Foreign Key Indexes
**Learning:** This codebase uses PostgreSQL with Prisma, which, unlike MySQL, does NOT automatically create indexes on foreign keys defined in `@relation`. This represents a latent N+1 / full table scan bottleneck as the `UserSession`, `Post`, and `Todo` tables scale.
**Action:** Always manually add `@@index([foreignKeyId])` to models that define a relation to ensure fast relational filtering and joins.
