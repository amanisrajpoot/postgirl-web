export default function Compare(){
  const rows = [
    { k: "Install size", a: "Up to 1+ GB (hello, Electron)", b: "~6–10 MB per OS binary" },
    { k: "Startup time", a: "Make coffee, then maybe", b: "Blink and it’s ready" },
    { k: "Login walls", a: "Please sign in... again", b: "None. You own your tests." },
    { k: "Data model", a: "Proprietary sync", b: "Plain files: YAML/CSV/JSON" },
    { k: "CI readiness", a: "Separate runners", b: "Built-in (JUnit output)" },
    { k: "Telemetry", a: "On (usually)", b: "Nope. We mind our business." },
  ];
  return (
    <section id="why" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Why Postgirl?</h2>
        <p className="mt-3 text-white/70">Postman delivers mail. Postgirl delivers results.</p>
        <div className="mt-8 grid gap-4">
          <div className="grid grid-cols-3 bg-[var(--card)] rounded-2xl overflow-hidden border border-white/10">
            <div className="px-4 py-3 font-semibold text-white/80">Metric</div>
            <div className="px-4 py-3 font-semibold text-pgIndigo">Postman</div>
            <div className="px-4 py-3 font-semibold text-pgPink">Postgirl</div>
            {rows.map((r, i) => (
              <>
                <div key={r.k + 'k'} className="px-4 py-3 border-t border-white/10">{r.k}</div>
                <div key={r.k + 'a'} className="px-4 py-3 border-t border-white/10 text-white/70">{r.a}</div>
                <div key={r.k + 'b'} className="px-4 py-3 border-t border-white/10 text-white">{r.b}</div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
