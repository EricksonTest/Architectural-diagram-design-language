/* Board switcher for the kit. Globals only. */
const BOARDS = [
  ["Information architecture", () => window.InformationArchitecture, 1020],
  ["Booking flow", () => window.UserFlow, 880],
  ["System architecture", () => window.SystemArchitecture, 800],
];

function App() {
  const [i, setI] = React.useState(0);
  const [scale, setScale] = React.useState(1);
  React.useEffect(() => {
    const fit = () =>
      setScale(Math.min(1, window.innerWidth / 1600, (window.innerHeight - 96) / BOARDS[i][2]));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [i]);
  React.useEffect(() => {
    const tabs = document.getElementById("tabs");
    tabs.innerHTML = "";
    BOARDS.forEach(([label], n) => {
      const b = document.createElement("button");
      b.textContent = label;
      b.setAttribute("aria-pressed", String(n === i));
      b.onclick = () => setI(n);
      tabs.appendChild(b);
    });
  }, [i]);
  const Board = BOARDS[i][1]();
  const natural = BOARDS[i][2];
  return (
    <div style={{ width: 1600 * scale, height: natural * scale, overflow: "hidden" }}>
      <div style={{ transform: "scale(" + scale + ")", transformOrigin: "top left", width: 1600, height: natural }}>
        {Board ? <Board /> : null}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
