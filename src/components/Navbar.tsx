export function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <nav
        className="flex items-center justify-between px-6 py-3 rounded-[128px] ring-1 ring-black/5"
        style={{
          background: 'rgba(255,255,255,0.90)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 80px rgba(0,0,0,0.16)',
        }}
      >
        <a href="#" className="font-bold text-base tracking-tight text-[#1f1f1f]">
          ✦ Portfolio
        </a>
        <div className="flex gap-8">
          <a
            href="#works"
            className="text-sm font-semibold text-[#555] transition-colors duration-200 hover:text-[#2dc56a]"
          >
            制作実績
          </a>
          <a
            href="#about"
            className="text-sm font-semibold text-[#555] transition-colors duration-200 hover:text-[#2dc56a]"
          >
            About
          </a>
        </div>
      </nav>
    </header>
  );
}
