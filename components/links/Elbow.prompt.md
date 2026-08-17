A single square corner for links that change axis — a screen that hands off sideways, a back-path returning up a column.

```jsx
<Elbow turn="down-left" width={120} height={48} />
```

Use absolute positioning to place it against the two nodes it joins. When a link needs more than one corner, reach for `Bus` instead — three corners in a row means the layout is wrong.
