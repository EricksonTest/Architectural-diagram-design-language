# Blueprint — architecture diagram system

Blueprint is a design system for **architecture diagrams**: information architecture
boards, user-flow boards and system/platform diagrams. It is not a product UI kit — the
"screens" it produces are diagrams, drawn from a small set of boxes, hairline arrows and
grouping frames on a saturated blue ground.

## Where it came from

The single source supplied was one reference image of an information-architecture board:
`uploads/pasted-1787006494961-0.png` (a blue "Information architecture" board with white
and light-blue boxes, hairline arrows and a "LEGENDS" key, bottom right). No codebase,
Figma file, brand kit or font binaries were provided.

Everything in this system is therefore derived from that one image plus the conventions it
implies. Colors were **sampled from the pixels** (`#3499ff` ground, `#b1d8ff` content
fill, pure white main-screen boxes). Type is a substitution — see Caveats.

The sample content on every board ("Meridian Care") is fictional, written to exercise the
system. Replace it.

## Index

| Path | What |
| --- | --- |
| `styles.css` | the one stylesheet consumers link (imports only) |
| `tokens/` | `fonts`, `colors`, `typography`, `spacing`, `effects` custom properties |
| `components/board/` | `DiagramBoard`, `BoardTitle`, `GroupFrame`, `Legend` |
| `components/nodes/` | `DiagramNode`, `NodeStack`, `Annotation` |
| `components/links/` | `Connector`, `Bus`, `Elbow` |
| `ui_kits/diagrams/` | three finished boards (IA, booking flow, system architecture) + switcher |
| `guidelines/` | foundation specimen cards (Colors, Type, Spacing, Lines, Brand) |
| `ds-preview.js` | preview shim: loads component sources when the compiled bundle isn't there yet |

## Visual foundations

**Ground.** Every diagram is drawn on a flat, saturated field — `--canvas-bg: #3499ff`.
No gradients, no vignettes, no texture, no grid paper. Two alternates exist and only two:
`board="deep"` (`#0a2f5c`, for platform/infra diagrams) and `board="paper"`
(`#eaf4ff`, for print and light decks). Never more than one ground per board.

**Boxes.** A node is a 132×30 rectangle, 3px radius, 1px border, 10/7 padding, with one
soft shadow (`0 1px 2px rgba(7,31,61,.18)`). Hierarchy is carried by **fill**, never by
size or weight:

- `primary` — white fill, blue ink (`#1f86f5`), blue hairline border: a destination.
- `secondary` — white fill, navy ink: content that lives inside a destination.
- `content` — `#b1d8ff` fill, deep-blue ink (`#0f6ad0`): leaf content.
- `terminal` — navy fill, white ink: a system edge (push, SMS, third party).
- `ghost` — 14% white fill, white 55% border: not built yet / out of scope.

Every node in a column shares one width. Runs of sibling nodes weld into a single block
divided by `#d5eaff` hairlines (`NodeStack gap={0}`) — that welding is the most
recognisable habit of the system.

**Lines.** 1px hairlines in `rgba(255,255,255,.72)`, square corners only, small solid
triangular arrowheads (10px base). No curves, no diagonals, no elbow with more than one
corner, no coloured links. Dashed = conditional or optional. `strong` (opaque white) =
the path you want read first. The trunk-and-drop `Bus` is the canonical fan-out.

**Frames.** 12px radius, 1px border at 55% white, label centred **on** the top border in
10px/0.16em uppercase. Solid = a real boundary; dashed = speculative.

**Type.** Poppins throughout. Board titles 54px/800, tracked in `-0.02em`, deliberately
broken across two lines. Node labels 11px/600 uppercase at 0.07em (9.5px on dense boards)
— never below 9.5px. Frame and legend labels 10px/700 at 0.16em. Annotations are the one
exception: Fira Code 11px, sentence case, prefixed with an em dash.

**Layout rules.** 56px board padding. 20px between siblings down a column, 56–68px between
columns, 34px trunk drops. Title top-left, diagram body centre and right, legend bottom
right, system edges bottom left. Boards are fixed-width canvases (1600px is the working
size) — they scale to fit, they do not reflow.

**Motion and states.** Diagrams are static artefacts; the only motion is a 120ms
transform/shadow transition on nodes that are actually clickable in a walkthrough, plus a
200ms fill fade on tab-style controls. Hover = `translateY(-1px)` with the raised shadow;
press = `scale(.985)`. Highlight for a walkthrough is `selected` (2px white outline,
2px offset) — never a colour change. No transparency or blur anywhere except the
`ghost` tier and the kit's own control bar.

**Imagery.** None. No photography, no illustration, no icons inside nodes. If a board
needs a picture, the picture belongs in the deck around it, not on the board.

## Content fundamentals

- Node labels are **uppercase, 1–4 words, no punctuation**: `LOG IN SCREEN`,
  `AVAILABLE SLOTS`, `SMS REMINDERS`. No trailing "screen" unless the reference board's
  own convention needs it for disambiguation.
- Numbered sequences are literal and terse: `ONBOARDING 1`, `ONBOARDING 2`.
- `&` is used, not "and" (`DATA & PRIVACY`).
- Titles are two words on two lines, sentence case, no full stop: "Information
  architecture", "System architecture", "Appointment booking flow".
- Kickers and legends are uppercase, tracked, and read as labels not sentences:
  `MERIDIAN CARE · IOS + ANDROID`, `MAIN SCREENS`.
- Annotations are the only sentence-case prose, lower-case first letter, no full stop, one
  idea, max two lines: `— deep link lands here when the invite is opened cold`.
- Voice is flat and factual — a diagram states, it does not sell. No first or second
  person, no marketing adjectives, **no emoji anywhere**.

## Iconography

The reference board contains no icons, no logo and no illustration, and this system stays
that way: **meaning is carried by fill and position, not by glyphs**. There is no icon
font, no sprite, no SVG icon set to copy in, and none should be introduced without the
user's own set. Unicode is limited to `·` as a separator, `&`, and `—` opening an
annotation. Emoji are never used.

**No logo was supplied.** Wherever a mark would go, set the product name in Poppins 700 —
see the "No logo supplied" card in `guidelines/`. Do not draw, reconstruct or approximate
a mark.

## Intentional additions

Nothing in the reference defines a component API, so the inventory below was derived from
what the board visibly contains. Two additions go slightly beyond it:

- **`Annotation`** (mono side-note) — the reference has no annotations, but real boards
  need to record a decision; kept deliberately quiet and mono so it can never be mistaken
  for a node.
- **Fira Code** — a second family, used only by `Annotation` and spec captions.

## Caveats

- **Fonts are substituted.** No binaries were supplied; Poppins is
  loaded from the Google Fonts CDN as the closest match to the reference's heavy geometric
  display type and micro-labels; Fira Code (the mono for annotations) was chosen by the user. Send the real font files and `tokens/fonts.css` becomes
  local `@font-face` rules.
- Colors are sampled from a compressed screenshot, so they are accurate to the pixel but
  not necessarily to the original design file's values.
- The reference is one board type (IA). The flow and system boards extend the same
  vocabulary rather than reproducing a supplied original.
