## 2023-10-27 - Unbounded API Queries in Nuxt/Prisma
**Learning:** Nuxt endpoints without pagination parameters using `findMany()` act as unbounded queries, fetching all table records into memory. This severely degrades performance for large tables.
**Action:** When creating or optimizing endpoints returning arrays, always implement pagination parameters using `getQuery(event)`, parsed with `parseInt` and guarded by `!Number.isNaN()`, and add a default `orderBy` to ensure deterministic paging. Update frontends to request specific slices of data (e.g. `?take=10`).
