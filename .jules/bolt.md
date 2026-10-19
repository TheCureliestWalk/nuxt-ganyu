## 2023-11-20 - [Cache External API Calls in Nuxt 3]
**Learning:** Nuxt 3 (Nitro) provides `defineCachedEventHandler` which can easily replace `defineEventHandler` to add robust server-side caching to slow, external network requests, significantly reducing endpoint latency and avoiding third-party rate limits.
**Action:** When implementing generic API endpoints that exclusively proxy external read-only data, prioritize using `defineCachedEventHandler` with a reasonable `maxAge` instead of fetching synchronously on every single user request.
