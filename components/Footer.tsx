export default function Footer(){
  return (
    <footer className="border-t border-white/10 mt-20 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-4 items-center justify-between text-white/70">
        <p>© {new Date().getFullYear()} Postgirl — made by humans tired of waiting for apps to boot.</p>
        <div className="flex gap-4">
          <a href="https://github.com/yourname/postgirl" target="_blank" rel="noreferrer">GitHub</a>
          <a href="/downloads">Downloads</a>
        </div>
      </div>
    </footer>
  );
}
