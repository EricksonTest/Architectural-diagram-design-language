The hairline arrow between two nodes. Sits as a flex sibling, so gaps stay honest.

```jsx
<DiagramNode label="Splash" />
<Connector direction="down" length={26} />
<DiagramNode label="Onboarding" />
```

`dashed` = a conditional or optional path; `strong` = the happy path you want the reader to follow first; `arrow="both"` for a two-way handoff. Never curve, never colour a line anything but white/ink.
