The blue ground for a diagram — always the outermost element of a board.

```jsx
<DiagramBoard width={1600} height={900}>
  <BoardTitle title={"Information\narchitecture"} />
  {/* nodes, connectors, frames */}
</DiagramBoard>
```

Variants: `board="azure"` (default signature blue), `"deep"` (navy board for systems / infra diagrams), `"paper"` (light board for print and light decks). Node and link colors re-map automatically — never hardcode a fill on a node to compensate.
