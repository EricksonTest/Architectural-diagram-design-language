/* Meridian Care — platform architecture on the deep board. */
function SystemArchitecture() {
  const NS = window.__BLUEPRINT__;
  const { DiagramBoard, BoardTitle, Legend, DiagramNode, NodeStack, Connector, GroupFrame, Annotation } = NS;
  const W = 1600, PAD = 56;
  const cols = [
    { title: "Clients", tier: "primary", items: ["iOS app", "Android app", "Clinician web"] },
    { title: "Edge", tier: "secondary", items: ["API gateway", "Auth service", "Rate limiter"] },
    { title: "Services", tier: "secondary", items: ["Booking", "Records", "Messaging", "Notifications"] },
    { title: "Data", tier: "content", items: ["Patient store", "Slot index", "Audit log", "Object storage"] },
    { title: "Third parties", tier: "terminal", items: ["Payer API", "SMS gateway", "e-Prescribing"] },
  ];
  return (
    <DiagramBoard board="deep" width={W} height={800} padding={PAD}>
      <BoardTitle kicker="Meridian Care · platform" title={"System\narchitecture"} meta="deep board · service boundaries" />
      <div style={{ position: "absolute", left: PAD, top: 270, right: PAD, display: "flex", alignItems: "flex-start" }}>
        {cols.map((c, i) => (
          <React.Fragment key={c.title}>
            {i > 0 ? <div style={{ paddingTop: 70 }}><Connector direction="right" length={48} arrow={i === 4 ? "both" : "end"} /></div> : null}
            <GroupFrame title={c.title} padding="30px 22px 22px" style={{ flex: 1 }}>
              <NodeStack width="100%" gap={10} tier={c.tier} items={c.items} />
            </GroupFrame>
          </React.Fragment>
        ))}
      </div>
      <div style={{ position: "absolute", left: PAD, bottom: 92, display: "flex", gap: 40, alignItems: "flex-start" }}>
        <DiagramNode tier="ghost" label="Wearable ingest" sublabel="phase 2" width={168} small />
        <Annotation width={340}>every client talks to the gateway only — no service is addressable from outside the edge</Annotation>
      </div>
      <Legend
        style={{ position: "absolute", right: PAD, bottom: 48 }}
        items={[
          { tier: "primary", label: "Client", width: 110 },
          { tier: "secondary", label: "Service", width: 110 },
          { tier: "content", label: "Data store", width: 110 },
          { tier: "terminal", label: "Third party", width: 110 },
        ]}
      />
    </DiagramBoard>
  );
}
window.SystemArchitecture = SystemArchitecture;
