## 2024-06-25 - Use Nuxt caching for static third party APIs
**Learning:** Nuxt's `defineCachedEventHandler` allows trivial caching of slow, infrequently changing third-party API calls (e.g. static profile info). Wrapping `eventHandler` with it provides massive performance gains (from ~109ms down to ~29ms locally).
**Action:** When creating or optimizing API endpoints that fetch data that updates infrequently from external sources, use `defineCachedEventHandler` with an appropriate `maxAge`.
