The atom of every board — one screen, service, or content object.

```jsx
<DiagramNode tier="primary" label="Log in screen" />
<DiagramNode tier="content" label="Personal QR code" small />
<DiagramNode tier="ghost" label="Payments" sublabel="phase 2" />
```

Tiers: `primary` (white + blue ink, a destination), `secondary` (white + navy ink, content inside a destination), `content` (light-blue fill, deep-blue ink, leaf content), `terminal` (navy fill, a system edge — push service, third party), `ghost` (translucent outline, not built yet). All labels are uppercase; every node in a column shares one width.
