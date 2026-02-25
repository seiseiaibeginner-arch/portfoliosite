export function Footer() {
  return (
    <footer style={{ background: '#1f1f1f' }}>
      <div className="mx-auto max-w-[1280px] px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-bold text-white tracking-tight">✦ Portfolio</p>
        <p className="text-sm" style={{ color: '#999' }}>
          © 2026 AI Developer Portfolio. Built with Claude Code.
        </p>
      </div>
    </footer>
  );
}
