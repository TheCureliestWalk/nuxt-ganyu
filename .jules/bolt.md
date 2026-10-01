## 2024-05-18 - Missing Foreign Key Indexes
**Learning:** Prisma does not automatically create indexes for `@relation` foreign keys in PostgreSQL. This can cause severe performance degradation (full table scans) when querying relations, which is common in a Nuxt/Vue app displaying lists of related items (e.g., user's posts, user's todos).
**Action:** Always manually add `@@index([foreignKeyId])` to models with relations in `prisma/schema.prisma` in this codebase.
