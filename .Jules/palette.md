## 2026-09-03 - Empty State UX Pattern for Dynamic Container Lists
**Learning:** Dynamic list containers (such as call history or activity logs) that allow clearing elements leave behind empty blank spaces when cleared if no empty state is provided, and keep action buttons (like "Clear") actively clickable when there is no content to clear.
**Action:** Always render an informative empty state with helpful visual icons and descriptive text when dynamic lists are cleared or empty on initialization, and disable clear/bulk actions with appropriate visual disabled indicators (`disabled:opacity-50 disabled:cursor-not-allowed`).

## 2026-09-03 - Accessible Toggle State for Icon Buttons
**Learning:** Icon-only action elements (such as heart/favorite toggles and navigation menu toggles) are often implemented using bare `<i>` elements or non-accessible buttons without keyboard focus states or screen reader descriptions. For toggle controls, static ARIA labels are insufficient when state changes.
**Action:** Always wrap action icons in `<button>` elements with `focus-visible:ring-2` focus rings and update `aria-label` (e.g., "Add to favorites" vs. "Remove from favorites") and `aria-expanded` dynamically in event listeners.
