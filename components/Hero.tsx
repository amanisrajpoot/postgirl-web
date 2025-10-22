export default function Hero(){
  return (
    <section className="relative pt-16 md:pt-24 pb-16 md:pb-28">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Postman is heavy.<br/>
            <span className="text-pgPink">Meet Postgirl.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80">
            A sleek Postman alternative that ships as tiny binaries for macOS, Linux, and Windows. No Electron, no account wall, no bloat — just APIs, delivered with attitude.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="pg-btn" href="/downloads">Download now</a>
            <a className="pg-ghost" href="#why">Why Postgirl?</a>
          </div>
          <p className="mt-4 text-white/60">
            “The only thing we deliver late is sarcasm.”
          </p>
        </div>
        <div className="pg-card">
          <pre className="code">
postgirl send -X GET "https://httpbin.org/get"

postgirl run samples/collection.yml \
  --data users.csv \
  --report junit:results.xml
          </pre>
          <div className="mt-4 text-white/70">
            Tip: try <span className="pg-kbd">postgirl --help</span>. We won’t ask for your email first.
          </div>
        </div>
      </div>
    </section>
  );
}
