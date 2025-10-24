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
          <h2 className="text-2xl font-bold">🚀 Getting Started</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Download & Extract</h3>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li><strong>macOS:</strong> Download zip, extract, then <span className="pg-kbd">chmod +x postgirl-darwin-*</span></li>
                <li><strong>Linux:</strong> Download zip, extract, then <span className="pg-kbd">chmod +x postgirl-linux-*</span></li>
                <li><strong>Windows:</strong> Download zip, extract, then double-click <span className="pg-kbd">postgirl-windows-*.exe</span></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Usage</h3>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li><strong>Command Line:</strong> <span className="pg-kbd">./postgirl-* https://api.example.com</span></li>
                <li><strong>Help:</strong> <span className="pg-kbd">./postgirl-* --help</span></li>
                <li><strong>Version:</strong> <span className="pg-kbd">./postgirl-* --version</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Troubleshooting</h3>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li><strong>macOS Gatekeeper:</strong> Right-click → Open, or run <span className="pg-kbd">xattr -dr com.apple.quarantine postgirl-darwin-*</span></li>
                <li><strong>Permission Denied:</strong> Make sure to run <span className="pg-kbd">chmod +x postgirl-*</span> after extraction</li>
                <li><strong>Windows:</strong> If blocked by Windows Defender, click "More info" → "Run anyway"</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
