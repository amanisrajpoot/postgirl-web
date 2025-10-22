import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DownloadGrid from '@/components/DownloadGrid';

export default function Downloads(){
  return (
    <>
      <Head>
        <title>Downloads — Postgirl</title>
        <meta name="description" content="Download Postgirl for macOS, Linux, and Windows (x64 & ARM64)." />
      </Head>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold">Downloads</h1>
        <p className="text-white/70 mt-3">Pick your OS. We won’t judge your life choices.</p>
        <div className="mt-8">
          <DownloadGrid />
        </div>
        <div className="mt-12 pg-card">
          <h2 className="text-2xl font-bold">Install tips</h2>
          <ul className="list-disc list-inside text-white/80 mt-3 space-y-2">
            <li><strong>macOS:</strong> Right-click → Open if Gatekeeper complains. Or <span className="pg-kbd">xattr -dr com.apple.quarantine</span>.</li>
            <li><strong>Linux:</strong> <span className="pg-kbd">chmod +x postgirl</span> then <span className="pg-kbd">./postgirl --help</span>.</li>
            <li><strong>Windows:</strong> Unzip and double-click <span className="pg-kbd">Run-Postgirl.bat</span> (if you ship one) or run in PowerShell.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
