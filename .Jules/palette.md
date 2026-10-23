## 2026-09-03 - Accessible Toggle State for Icon Buttons
**Learning:** Icon-only action elements (such as heart/favorite toggles and navigation menu toggles) are often implemented using bare `<i>` elements or non-accessible buttons without keyboard focus states or screen reader descriptions. For toggle controls, static ARIA labels are insufficient when state changes.
**Action:** Always wrap action icons in `<button>` elements with `focus-visible:ring-2` focus rings and update `aria-label` (e.g., "Add to favorites" vs. "Remove from favorites") and `aria-expanded` dynamically in event listeners.

## 2026-10-23 - Accessible Dynamic Container Feeds with Empty States
**Learning:** Dynamic DOM lists (such as call logs or notification feeds) need `aria-live="polite"` to be announced to screen reader users when updated, and require clear empty state visual feedback when cleared rather than empty white space.
**Action:** Always add `aria-live="polite"` to dynamically updated list containers and provide an informative empty state component when no entries exist.
