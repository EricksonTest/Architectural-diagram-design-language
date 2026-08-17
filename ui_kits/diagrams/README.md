# Diagram boards kit

Three boards built only from Blueprint components — the reference for how a finished
diagram should look.

| File | Board | Notes |
| --- | --- | --- |
| `InformationArchitecture.jsx` | 1600×1020, azure | entry spine → trunk fan-out → five product columns, system edges bottom-left, legend bottom-right |
| `UserFlow.jsx` | 1600×880, azure | four lanes in `GroupFrame`s, happy path strong, alternates dashed, exits + notifications below |
| `SystemArchitecture.jsx` | 1600×800, deep | client → edge → services → data → third parties, one column per boundary |

`index.html` switches between them and scales to the viewport. Content is a fictional
product ("Meridian Care") — replace the arrays at the top of each file; the layout derives
from them.

Kit screens are plain globals (no `import`/`export`) so `index.html` can load them with
Babel standalone; components come from the compiled bundle via `window.__BLUEPRINT__`.
