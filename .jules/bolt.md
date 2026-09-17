## 2024-05-24 - Dynamic limits on API routes

**Learning:** Hardcoding 'take' directly in the Prisma backend queries can cause breaking changes across generic API endpoints if other components expect full data sets.
**Action:** Always parse request query limits like '?limit=x' dynamically using 'getQuery(event)' rather than setting static default limits in generic findMany statements.
