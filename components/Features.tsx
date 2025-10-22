const features = [
  { title: "Fast CLI & Runner", desc: "Send requests, run collections, assert results, collect JUnit. All headless friendly." },
  { title: "Portable by design", desc: "Mac, Linux, Windows. x64 and ARM. You bring a shell—we bring the speed." },
  { title: "File-first", desc: "YAML collections, CSV/JSON data, env templating. Git loves it." },
  { title: "No sign-in, ever", desc: "Stop authenticating to test authentication." },
  { title: "No telemetry", desc: "We don’t want your data. We want your PRs." },
  { title: "Pretty or gritty", desc: "TUI optional. CLI rules. HTML reports if you like colors." }
];

export default function Features(){
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Features</h2>
        <p className="mt-3 text-white/70">Everything you need for APIs. Nothing you don’t.</p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(f => (
            <div key={f.title} className="pg-card">
              <h3 className="font-bold text-xl">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
