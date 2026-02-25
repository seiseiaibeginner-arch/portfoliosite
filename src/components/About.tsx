import { techCategories } from '../data/projects';
import { useReveal } from '../hooks/useReveal';

const dotColors: Record<string, string> = {
  green:  '#2dc56a',
  blue:   '#007cff',
  yellow: '#d97706',
  purple: '#9333ea',
};

const titleColors: Record<string, string> = {
  green:  '#2dc56a',
  blue:   '#007cff',
  yellow: '#d97706',
  purple: '#9333ea',
};

export function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-10">
        {/* Header */}
        <div className="mb-16">
          <p className="reveal text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#2dc56a' }}>
            About
          </p>
          <h2 className="reveal reveal-delay-1 text-4xl sm:text-5xl font-black tracking-tight text-[#1f1f1f]">
            使用技術スタック
          </h2>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`reveal reveal-delay-${i + 1} rounded-[20px] p-6 transition-shadow duration-300 hover:shadow-md`}
              style={{ background: '#f7f8f8' }}
            >
              <div
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-[12px] text-lg"
                style={{ background: `${dotColors[cat.color]}20` }}
              >
                {cat.icon}
              </div>
              <h3
                className="text-sm font-bold mb-4 tracking-wide"
                style={{ color: titleColors[cat.color] }}
              >
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#555]">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: dotColors[cat.color] }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
