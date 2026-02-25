import { stats } from '../data/projects';
import { useReveal } from '../hooks/useReveal';

export function Hero() {
  const ref = useReveal<HTMLElement>(true);

  return (
    <section ref={ref} className="relative min-h-screen bg-white overflow-hidden flex items-center">
      {/* Background pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-35"
        style={{
          backgroundImage: "url('/portfoliosite/image/hero-bg-pattern.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-white/60" />

      <div className="mx-auto w-full max-w-[1280px] px-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">

          {/* Left: text */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div
              className="reveal inline-flex items-center gap-2 self-start mb-8 px-4 py-1.5 rounded-[128px] text-sm font-semibold text-[#2dc56a]"
              style={{
                background: 'rgba(45,197,106,0.10)',
                boxShadow: '0 0 0 1px rgba(45,197,106,0.20)',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: '#2dc56a' }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ background: '#2dc56a' }}
                />
              </span>
              Claude Code × AI開発の成果物
            </div>

            {/* Heading */}
            <h1
              className="reveal reveal-delay-1 leading-[1.05] font-black tracking-tight text-[#1f1f1f]"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}
            >
              AI開発<br />
              <span style={{ color: '#2dc56a' }}>ポートフォリオ</span>
            </h1>

            {/* Description */}
            <p className="reveal reveal-delay-2 mt-6 text-lg text-[#555] leading-relaxed">
              Claude Code・Dify・Streamlit・Next.js などを活用して制作した<br className="hidden sm:block" />
              WebアプリとAIプロジェクトの実績一覧です。
            </p>
            <p className="reveal reveal-delay-2 mt-2 text-sm text-[#999]">
              プログラミング未経験からAI開発に取り組み、アイデアをプロダクトへ。
            </p>

            {/* Stats */}
            <dl className="reveal reveal-delay-3 mt-10 flex gap-10">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={i > 0 ? 'border-l border-[#e8e8e8] pl-10' : ''}
                >
                  <dd
                    className="text-4xl font-black"
                    style={{ color: stat.accent ? '#2dc56a' : '#1f1f1f' }}
                  >
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-sm text-[#999]">{stat.label}</dt>
                </div>
              ))}
            </dl>

            {/* CTA */}
            <div className="reveal reveal-delay-4 mt-10 flex items-center gap-4">
              <a
                href="#works"
                className="inline-flex items-center gap-2 rounded-[128px] px-7 py-3.5 text-sm font-bold text-[#1f1f1f] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(252,232,9,0.40)] hover:shadow-[0_6px_28px_rgba(252,232,9,0.50)]"
                style={{ background: '#fce809' }}
              >
                実績を見る <span aria-hidden>→</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-[128px] border-2 border-[#ccc] px-7 py-3.5 text-sm font-bold text-[#1f1f1f] transition-all duration-200 hover:border-[#2dc56a] hover:text-[#2dc56a]"
              >
                技術スタック
              </a>
            </div>
          </div>

          {/* Right: hero illustration */}
          <div className="reveal reveal-delay-3 flex items-center justify-center lg:justify-end">
            <img
              src="/portfoliosite/image/hero-image.png"
              alt="AI開発イラスト — かわいいキャラクターがラップトップを持っている"
              className="w-full max-w-xl lg:max-w-none"
              style={{ filter: 'drop-shadow(0 20px 60px rgba(45,197,106,0.15))' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#ccc] flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-[#999]" />
        </div>
      </div>
    </section>
  );
}
