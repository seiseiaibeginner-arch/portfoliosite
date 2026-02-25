import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { useReveal } from '../hooks/useReveal';

export function Works() {
  const ref = useReveal();

  return (
    <section
      id="works"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 sm:py-32"
      style={{ background: '#f7f8f8' }}
    >
      <div className="mx-auto max-w-[1280px] px-10">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="reveal text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#2dc56a' }}>
            Works
          </p>
          <h2 className="reveal reveal-delay-1 text-4xl sm:text-5xl font-black tracking-tight text-[#1f1f1f]">
            制作実績
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-lg text-[#555]">
            Claude Code や各種AIツールを使って制作したプロジェクトです。
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={Math.min((i % 3) + 1, 5)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
