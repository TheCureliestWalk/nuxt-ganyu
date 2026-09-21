## 2024-10-24 - Dynamic pagination validation in Prisma

**Learning:** When parsing query parameters for dynamic pagination with Prisma (like `take` and `skip`), failing to validate the parsed values using `!Number.isNaN()` can lead to passing `NaN` to Prisma, which results in a 500 server error when invalid inputs are provided.
**Action:** Always validate `parseInt` results with `!Number.isNaN()` before including them in Prisma query options.
