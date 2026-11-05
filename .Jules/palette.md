## 2026-09-03 - Accessible Toggle State for Icon Buttons
**Learning:** Icon-only action elements (such as heart/favorite toggles and navigation menu toggles) are often implemented using bare `<i>` elements or non-accessible buttons without keyboard focus states or screen reader descriptions. For toggle controls, static ARIA labels are insufficient when state changes.
**Action:** Always wrap action icons in `<button>` elements with `focus-visible:ring-2` focus rings and update `aria-label` (e.g., "Add to favorites" vs. "Remove from favorites") and `aria-expanded` dynamically in event listeners.

## 2026-11-05 - Dynamic Empty States with ARIA Live Regions
**Learning:** Clearing dynamic activity feeds (like Call History) leaves an empty visual void that disorients users and offers no feedback to screen reader users about whether the action succeeded or where subsequent items will go.
**Action:** Pair `aria-live="polite"` containers with a friendly empty state component (subtle icon, clear heading, and explanatory subtext) that displays on clear and automatically clears when new items are added.
