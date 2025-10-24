export default function Hero(){
  return (
    <section className="relative pt-12 md:pt-24 pb-16 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-10 items-center w-full">
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Postman is heavy.<br/>
            <span className="text-pgPink">Meet Postgirl.</span>
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80">
            A sleek Postman alternative that ships as tiny binaries for macOS, Linux, and Windows. No Electron, no account wall, no bloat — just APIs, delivered with attitude.
          </p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
            <a className="pg-btn text-center" href="/downloads">Download now</a>
            <a className="pg-ghost text-center" href="#why">Why Postgirl?</a>
          </div>
          <p className="mt-4 text-sm md:text-base text-white/60">
            "The only thing we deliver late is sarcasm."
          </p>
        </div>
        <div className="pg-card mt-8 md:mt-0 w-full overflow-hidden">
          <pre className="code text-xs sm:text-sm overflow-x-auto max-w-full">
postgirl send -X GET "https://httpbin.org/get"

postgirl run samples/collection.yml \
  --data users.csv \
  --report junit:results.xml
          </pre>
          <div className="mt-4 text-sm text-white/70">
            Tip: try <span className="pg-kbd">postgirl --help</span>. We won't ask for your email first.
          </div>
        </div>
      </div>
    </section>
  );
}
