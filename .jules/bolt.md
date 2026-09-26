## 2024-05-24 - Array Map vs ForEach Mutation
**Learning:** Using `.map()` for side-effect array mutations allocates unneeded arrays resulting in memory overhead, whereas `.forEach()` executes side-effects without this allocation cost.
**Action:** Always prefer `.forEach()` for simple iteration where the returned mapped array is not utilized.
