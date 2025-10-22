import Link from 'next/link';

export default function Header(){
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--bg)]/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline hover:no-underline">
          <span className="inline-block w-8 h-8 rounded-xl bg-pgPink" />
          <span className="font-bold text-lg">Postgirl</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link className="pg-ghost no-underline" href="/downloads">Downloads</Link>
          <a className="pg-ghost" href="#features">Features</a>
          <a className="pg-ghost" href="#how">How it works</a>
          <a className="pg-btn" href="https://github.com/yourname/postgirl" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </div>
    </header>
  );
}
