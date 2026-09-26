## 2025-02-27 - Unbounded Query Prevention via Pagination
**Learning:** Parsing query parameters like `take` and `skip` using `parseInt` is necessary to enable dynamic pagination in Prisma. However, relying solely on client-provided parameters is insufficient to prevent unbounded queries if those parameters are omitted.
**Action:** Always implement a reasonable default fallback limit (e.g., `take = 50`) on the server-side when optimizing generic endpoints to ensure unbounded queries are definitively prevented, even when clients fail to pass pagination limits.
