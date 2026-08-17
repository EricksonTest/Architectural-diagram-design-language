The idiom that makes these boards readable: one node fans out to a row of columns via a square trunk.

```jsx
<Bus width={1240} drops={[0.06, 0.28, 0.5, 0.72, 0.94]} fromX={0.5} stem={28} drop={30} />
```

Pass explicit `drops` fractions that line up with the centre of each column below — evenly spaced numeric `drops` only works when the columns are evenly spaced too. All corners are square; no curves, no diagonals anywhere in this system.
