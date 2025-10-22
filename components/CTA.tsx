export default function CTA(){
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="pg-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to dump bloatware?</h3>
            <p className="text-white/70 mt-2">Download Postgirl. Small binary. Big energy.</p>
          </div>
          <a className="pg-btn no-underline" href="/downloads">Get Postgirl ↗</a>
        </div>
      </div>
    </section>
  );
}
