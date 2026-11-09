## 2026-09-03 - Accessible Toggle State for Icon Buttons
**Learning:** Icon-only action elements (such as heart/favorite toggles and navigation menu toggles) are often implemented using bare `<i>` elements or non-accessible buttons without keyboard focus states or screen reader descriptions. For toggle controls, static ARIA labels are insufficient when state changes.
**Action:** Always wrap action icons in `<button>` elements with `focus-visible:ring-2` focus rings and update `aria-label` (e.g., "Add to favorites" vs. "Remove from favorites") and `aria-expanded` dynamically in event listeners.

## 2026-09-04 - Empty State and Live Regions for Dynamic Activity Feeds
**Learning:** Clearing dynamic history/activity feeds often leaves an empty blank container without visual feedback, which looks broken to users. Furthermore, dynamic feed updates and clearances go unnoticed by screen reader users without live regions.
**Action:** Provide a semantic empty state placeholder (`No history yet`) when clearing feed containers, remove the empty placeholder before appending new items, and equip container wrappers with `aria-live="polite"`.
