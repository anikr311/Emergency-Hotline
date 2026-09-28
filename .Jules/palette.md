## 2026-09-03 - Accessible Toggle State for Icon Buttons
**Learning:** Icon-only action elements (such as heart/favorite toggles and navigation menu toggles) are often implemented using bare `<i>` elements or non-accessible buttons without keyboard focus states or screen reader descriptions. For toggle controls, static ARIA labels are insufficient when state changes.
**Action:** Always wrap action icons in `<button>` elements with `focus-visible:ring-2` focus rings and update `aria-label` (e.g., "Add to favorites" vs. "Remove from favorites") and `aria-expanded` dynamically in event listeners.

## 2026-09-28 - Call History Empty State & Keyboard Navigation
**Learning:** Empty list containers (such as cleared history panels) leave users uncertain whether the application has finished clearing or if an error occurred when simply emptied to `""`. Adding a clear empty state message along with explicit focus ring states and ARIA labels on action triggers improves usability for keyboard and screen reader users.
**Action:** Always render a helpful empty state indicator when clearing dynamic lists and clear the empty state cleanly when new items are added.
