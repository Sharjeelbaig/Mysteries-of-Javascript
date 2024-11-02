# Client Height vs Scroll Height

---

The `scroller.scrollHeight` property represents the total height of the content within the scroller, including the overflowed portion that is not visible. In contrast, `scroller.clientHeight` measures only the visible part of the scroller, excluding any overflowed content.

To determine the hidden (overflowed) height, you can subtract `clientHeight` from `scrollHeight`. Here’s an example of how to log this difference using `useEffect`:

```tsx
useEffect(() => {
  const scroller = scrollerRef.current;
  if (scroller) {
    const difference = scroller.scrollHeight - scroller.clientHeight;
    console.log("Hidden (overflowed) content height:", difference);
  }
}, [scrollerRef]);
```

This code logs the difference between the scroller's total content height and its visible height.
