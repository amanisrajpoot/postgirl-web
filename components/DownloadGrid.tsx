type Build = { os: string; arch: string; file: string; note?: string };
const builds: Build[] = [
  { os: "macOS",  arch: "Intel (amd64)", file: "postgirl-darwin-amd64",     note: "chmod +x after download" },
  { os: "macOS",  arch: "Apple Silicon (arm64)", file: "postgirl-darwin-arm64", note: "chmod +x after download" },
  { os: "Linux",  arch: "x64 (amd64)",   file: "postgirl-linux-amd64",       note: "chmod +x after download" },
  { os: "Linux",  arch: "ARM64",         file: "postgirl-linux-arm64",       note: "chmod +x after download" },
  { os: "Windows",arch: "x64 (amd64)",   file: "postgirl-windows-amd64.exe" },
  { os: "Windows",arch: "ARM64",         file: "postgirl-windows-arm64.exe" },
];

export default function DownloadGrid(){
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {builds.map(b => (
        <div key={b.file} className="pg-card flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold">
              {b.os} <span className="text-white/60">({b.arch})</span>
            </h3>
            <p className="text-white/70 mt-1">
              {b.os === "Windows" ? "Direct .exe" : "Raw binary (no zip)"}.
            </p>
            {b.note && <p className="text-white/50 mt-1">{b.note}</p>}
          </div>
          <a className="pg-btn mt-4 no-underline" href={`/downloads/${b.file}`} download>
            Download
          </a>
        </div>
      ))}
    </div>
  );
}
