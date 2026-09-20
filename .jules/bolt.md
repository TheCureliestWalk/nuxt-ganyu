## 2024-05-18 - [Prisma Pagination Parameter Handling]

**Learning:** When parsing query parameters with `parseInt()` for dynamic pagination in Prisma (such as `take` and `skip`), passing `NaN` into Prisma will cause 500 server errors on invalid inputs.
**Action:** Always validate the parsed result with `!Number.isNaN()` to avoid passing `NaN` into Prisma.
