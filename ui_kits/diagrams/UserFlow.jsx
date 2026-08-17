/* Meridian Care — appointment booking flow. */
function UserFlow() {
  const NS = window.__BLUEPRINT__;
  const { DiagramBoard, BoardTitle, Legend, DiagramNode, NodeStack, Connector, GroupFrame, Annotation } = NS;
  const W = 1600, PAD = 56;
  const lanes = [
    { title: "Find", steps: [["Home screen", "primary"], ["Find a clinician", "primary"], ["Filter by clinic", "secondary"]] },
    { title: "Choose", steps: [["Available slots", "primary"], ["Slot detail", "secondary"], ["Insurance check", "secondary"]] },
    { title: "Confirm", steps: [["Review booking", "primary"], ["Consent to share", "secondary"], ["Booking success", "content"]] },
    { title: "After", steps: [["Upcoming list", "primary"], ["Reschedule", "content"], ["Cancel", "content"]] },
  ];
  return (
    <DiagramBoard width={W} height={880} padding={PAD}>
      <BoardTitle kicker="Meridian Care · booking" title={"Appointment\nbooking flow"} meta="happy path solid · alternates dashed" />

      <div style={{ position: "absolute", left: PAD, top: 250, right: PAD, display: "flex", alignItems: "flex-start" }}>
        {lanes.map((lane, li) => (
          <React.Fragment key={lane.title}>
            {li > 0 ? <div style={{ paddingTop: 62 }}><Connector direction="right" length={54} strong /></div> : null}
            <GroupFrame title={lane.title} padding="30px 24px 24px" style={{ flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {lane.steps.map(([label, tier], i) => (
                  <React.Fragment key={label}>
                    {i > 0 ? <Connector direction="down" length={22} dashed={i === 2} /> : null}
                    <DiagramNode tier={tier} label={label} width={168} />
                  </React.Fragment>
                ))}
              </div>
            </GroupFrame>
          </React.Fragment>
        ))}
      </div>

      <div style={{ position: "absolute", left: PAD, top: 610, display: "flex", gap: 56, alignItems: "flex-start" }}>
        <div style={{ width: 220 }}>
          <div style={{ fontSize: "var(--fs-legend)", fontWeight: 700, letterSpacing: "var(--ls-legend)", textTransform: "uppercase", marginBottom: 10, color: "var(--text-display)" }}>Exits</div>
          <NodeStack width="100%" gap={8} tier="ghost" small items={["No slots in range", "Insurance declined", "Session expired"]} />
        </div>
        <div style={{ width: 220 }}>
          <div style={{ fontSize: "var(--fs-legend)", fontWeight: 700, letterSpacing: "var(--ls-legend)", textTransform: "uppercase", marginBottom: 10, color: "var(--text-display)" }}>Notifications</div>
          <NodeStack width="100%" gap={8} tier="terminal" small items={["Booking confirmed · push", "24h reminder · SMS", "Clinician change · push"]} />
        </div>
        <Annotation width={280} style={{ paddingTop: 26 }}>
          insurance check runs in the background; the dashed step only surfaces when the payer rejects the policy number
        </Annotation>
      </div>

      <Legend
        style={{ position: "absolute", right: PAD, bottom: 56 }}
        items={[
          { tier: "primary", label: "Screen", width: 116 },
          { tier: "secondary", label: "Step in screen", width: 116 },
          { tier: "content", label: "Outcome", width: 116 },
          { tier: "ghost", label: "Exit", width: 116 },
        ]}
      />
    </DiagramBoard>
  );
}
window.UserFlow = UserFlow;
