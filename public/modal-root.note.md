# Modal Root

This file indicates that the `#modal-root` div is expected in `index.html` for the Modal component portal target.

Ensure `index.html` includes:

```html
<div id="modal-root"></div>
```

This is used by `src/components/ui/Modal.tsx` for rendering modals outside the normal DOM tree.
