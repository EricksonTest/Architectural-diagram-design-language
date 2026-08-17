Sequential or sibling nodes in one column — onboarding steps, the contents of a screen, a settings list.

```jsx
<NodeStack items={["Onboarding 1", "Onboarding 2", "Onboarding 3", "Onboarding 4"]} tier="primary" />
<NodeStack gap={8} tier="content" items={["Risk status", "QR check-in", "Vaccine status"]} />
```

`gap={0}` (default) welds the run into one block with hairline dividers — use it for ordered steps and for lists that belong to one parent. Use a gap only when the items are genuinely independent.
