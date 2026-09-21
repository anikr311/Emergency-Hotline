## 2026-09-03 - Accessible Toggle State for Icon Buttons
**Learning:** Icon-only action elements (such as heart/favorite toggles and navigation menu toggles) are often implemented using bare `<i>` elements or non-accessible buttons without keyboard focus states or screen reader descriptions. For toggle controls, static ARIA labels are insufficient when state changes.
**Action:** Always wrap action icons in `<button>` elements with `focus-visible:ring-2` focus rings and update `aria-label` (e.g., "Add to favorites" vs. "Remove from favorites") and `aria-expanded` dynamically in event listeners.

## 2026-09-21 - Helpful Empty States for Dynamic Lists
**Learning:** Clearing dynamic list items (like Call History) without an explicit empty state placeholder leaves containers awkwardly blank, causing user confusion on whether content is loading or cleared.
**Action:** Always render a clean visual empty state with clear text ("No recent calls") and an icon when dynamic list containers are cleared.
