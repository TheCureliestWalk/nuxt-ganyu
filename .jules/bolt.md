## 2024-05-24 - [API Pagination Edge Cases]
**Learning:** [When parsing query parameters with `parseInt()` for dynamic pagination in Prisma (such as `take` and `skip`), Prisma throws a 500 server error if it receives `NaN`. Defaulting to `undefined` on `NaN` is critical to maintain backward compatibility while avoiding server crashes on invalid input.]
**Action:** [Always check `!Number.isNaN(parsedValue)` before assigning optional integer bounds derived from query parameters.]
