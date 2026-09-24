## 2026-09-03 - Accessible Toggle State for Icon Buttons
**Learning:** Icon-only action elements (such as heart/favorite toggles and navigation menu toggles) are often implemented using bare `<i>` elements or non-accessible buttons without keyboard focus states or screen reader descriptions. For toggle controls, static ARIA labels are insufficient when state changes.
**Action:** Always wrap action icons in `<button>` elements with `focus-visible:ring-2` focus rings and update `aria-label` (e.g., "Add to favorites" vs. "Remove from favorites") and `aria-expanded` dynamically in event listeners.

## 2026-09-24 - Empty State Visual and Screen Reader Feedback
**Learning:** Clearing dynamic list containers (such as call history or activity feeds) by setting `innerHTML = ""` leaves a visual blank space without reassuring feedback, which can confuse users as to whether the action succeeded or the component broke.
**Action:** Always render an informative empty state message (e.g. "No call history yet.") when clearing dynamic containers, and clear that message when new items are added.
