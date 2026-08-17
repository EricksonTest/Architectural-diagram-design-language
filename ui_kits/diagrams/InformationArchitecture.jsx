/* Meridian Care — app information architecture. Kit screen: globals, no modules. */
function InformationArchitecture() {
  const NS = window.__BLUEPRINT__;
  const { DiagramBoard, BoardTitle, Legend, DiagramNode, NodeStack, Connector, Bus, Annotation } = NS;

  const W = 1600, PAD = 56;
  const COL_W = 148, COL_GAP = 68;
  const columns = [
    { head: "Home screen", contents: ["Today's summary", "Next appointment", "Care team"], leaves: ["Vitals log", "Symptom check", "Care plan"] },
    { head: "Records screen", contents: ["Visit history", "Test results", "Medications"], leaves: ["Result detail", "Refill request"] },
    { head: "Booking screen", contents: ["Find a clinician", "Available slots"], leaves: ["Slot detail", "Booking success", "Add to calendar"] },
    { head: "Messages screen", contents: ["Care team thread", "Triage bot"], leaves: ["Attachment view"] },
    { head: "Profile screen", contents: ["Personal details", "Insurance", "App settings", "Privacy", "Sign out"], leaves: ["Dependant details"] },
  ];
  const inner = W - PAD * 2;
  const rowW = columns.length * COL_W + (columns.length - 1) * COL_GAP;
  const rowLeft = PAD + (inner - rowW) / 2;
  const centers = columns.map((_, i) => (i * (COL_W + COL_GAP) + COL_W / 2) / rowW);

  return (
    <DiagramBoard width={W} height={1020} padding={PAD}>
      <BoardTitle kicker="Meridian Care · iOS + Android" title={"Information\narchitecture"} meta="rev 04 · 17 Aug 2026 · product design" />

      {/* entry spine */}
      <div style={{ position: "absolute", left: 620, top: 56, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <DiagramNode tier="primary" label="Splash screen" width={COL_W} />
        <Connector direction="down" length={24} />
        <NodeStack width={COL_W} tier="primary" items={["Onboarding 1", "Onboarding 2", "Onboarding 3"]} />
        <Connector direction="down" length={24} />
        <DiagramNode tier="primary" label="Log in screen" width={COL_W} outlined />
      </div>

      {/* lateral auth paths */}
      <div style={{ position: "absolute", left: 216, top: 244, display: "flex", alignItems: "flex-start" }}>
        <div style={{ width: COL_W, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <DiagramNode tier="secondary" label="Identity check 1" width="100%" small />
          <Connector direction="down" length={18} />
          <DiagramNode tier="secondary" label="Identity check 2" width="100%" small />
        </div>
        <div style={{ paddingTop: 8 }}><Connector direction="left" length={252} /></div>
      </div>
      <div style={{ position: "absolute", left: 768, top: 244, display: "flex", alignItems: "flex-start" }}>
        {[
          { label: "T&C screen", tier: "secondary" },
          { label: "Data & privacy", tier: "secondary" },
          { label: "Consent to share", tier: "secondary" },
          { label: "Sign up screen", tier: "primary" },
        ].map((n) => (
          <React.Fragment key={n.label}>
            <div style={{ paddingTop: 8 }}><Connector direction="right" length={30} /></div>
            <DiagramNode tier={n.tier} label={n.label} width={132} small />
          </React.Fragment>
        ))}
      </div>
      <Annotation width={230} style={{ position: "absolute", left: 216, top: 336 }}>
        identity check is skipped for returning devices with a valid keychain token
      </Annotation>

      {/* trunk fan-out */}
      <div style={{ position: "absolute", left: rowLeft, top: 392, width: rowW }}>
        <Bus width={rowW} drops={centers} fromX={(620 + COL_W / 2 - rowLeft) / rowW} stem={40} drop={34} strong />
        <div style={{ display: "flex", gap: COL_GAP, marginTop: 4 }}>
          {columns.map((c) => (
            <div key={c.head} style={{ width: COL_W, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <DiagramNode tier="primary" label={c.head} width="100%" />
              <Connector direction="down" length={20} />
              <NodeStack width="100%" tier="secondary" items={c.contents} small />
              <Connector direction="down" length={20} dashed />
              <NodeStack width="100%" gap={8} tier="content" items={c.leaves} small />
            </div>
          ))}
        </div>
      </div>

      {/* system edges */}
      <div style={{ position: "absolute", left: PAD, bottom: 128, width: 168, display: "flex", flexDirection: "column", gap: 10 }}>
        <DiagramNode tier="terminal" label="Push notifications" width="100%" small />
        <DiagramNode tier="terminal" label="SMS reminders" width="100%" small />
        <DiagramNode tier="ghost" label="Wearable sync" sublabel="phase 2" width="100%" small />
      </div>

      <Legend
        style={{ position: "absolute", right: PAD, bottom: 56 }}
        items={[
          { tier: "primary", label: "Main screens", width: 116 },
          { tier: "secondary", label: "On-screen contents", width: 116 },
          { tier: "content", label: "Content screens", width: 116 },
          { tier: "terminal", label: "System edges", width: 116 },
          { tier: "ghost", label: "Not built yet", width: 116 },
        ]}
      />
    </DiagramBoard>
  );
}
window.InformationArchitecture = InformationArchitecture;
