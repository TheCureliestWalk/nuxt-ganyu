## 2023-09-12 - Prevent full re-renders in Vue with v-for keys

**Learning:** Found multiple instances where Nuxt/Vue `v-for` loops were lacking `:key` attributes (e.g. lists of posts, users, todo items). This is a severe anti-pattern in Vue because without unique keys, Vue's virtual DOM diffing algorithm cannot track which elements changed, were added, or were removed. This forces Vue to tear down and recreate the entire DOM for the list upon any change, causing significant rendering bottlenecks.
**Action:** Always verify that every `v-for` loop has a stable, unique `:key` attribute. Use object IDs whenever possible, and index as a fallback (though index is less optimal for lists that can be reordered).
