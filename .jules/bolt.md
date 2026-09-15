## 2024-05-18 - Avoid breaking changes when modifying api contracts for performance

**Learning:** Hardcoding a strict limit and dropping fields on a general API endpoint is a severe breaking change. Even if the immediate front-end uses only some parts, changing it without using dynamic queries will break any other clients or endpoints using the general endpoint in ways that expect the full payload.
**Action:** True pagination and field selection should be driven dynamically via URL query parameters (e.g., `?limit=10`).

## 2024-05-18 - Type safety of select clauses in Prisma

**Learning:** Prisma's select clause is strictly typed (e.g. `Prisma.PostSelect`). Directly assigning a dynamic type like `Record<string, boolean>` derived from a string split will cause a TypeScript compilation error because it violates the strict schema types. Secondly, doing this naively enables users to crash the server by requesting non-existent properties which will trigger runtime validation errors.
**Action:** Only allow dynamic querying via strictly typed subsets of fields when applying select filters, rather than blindly relying on arbitrary URL strings. Or just implement strict limits (pagination) which safely addresses the immediate concern of O(N) loading without typing complications.
