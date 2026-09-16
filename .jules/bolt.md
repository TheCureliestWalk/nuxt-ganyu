## 2024-05-19 - Unbounded Queries in Nuxt/Prisma Dashboards

**Learning:** Found an anti-pattern where unbounded Prisma `findMany()` calls were used to fetch data for dashboard widgets (like PostBox) that explicitly only display a small bounded subset (e.g., "Latest Posts (10)"). This loads unnecessary data into memory and over the network, causing slowdowns as the database grows.
**Action:** Always check dashboard components for hardcoded layout bounds (like `v-for` displaying a limited list) and ensure the backing API endpoint uses Prisma's `take` and `select` features to match those exact UI bounds.
