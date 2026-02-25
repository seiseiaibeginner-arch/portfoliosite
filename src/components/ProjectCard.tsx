import type { Project } from '../types';

const tagStyles: Record<string, { bg: string; text: string }> = {
  green:  { bg: 'rgba(45,197,106,0.12)',  text: '#1a9a4f' },
  blue:   { bg: 'rgba(0,124,255,0.10)',   text: '#0060cc' },
  pink:   { bg: 'rgba(236,72,153,0.10)',  text: '#be185d' },
  yellow: { bg: 'rgba(234,179,8,0.12)',   text: '#854d0e' },
  purple: { bg: 'rgba(168,85,247,0.10)',  text: '#7e22ce' },
  sky:    { bg: 'rgba(14,165,233,0.10)',  text: '#0369a1' },
};

interface Props {
  project: Project;
  delay: number;
}

export function ProjectCard({ project, delay }: Props) {
  return (
    <article
      className={`reveal reveal-delay-${delay} group flex flex-col overflow-hidden rounded-[20px] bg-white transition-all duration-300 hover:-translate-y-1.5`}
      style={{
        boxShadow: '0 4px 50px rgba(0,0,0,0.12)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          '0 8px 80px rgba(0,0,0,0.16)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          '0 4px 50px rgba(0,0,0,0.12)';
      }}
    >
      {/* Image */}
      <div className="overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => {
            const style = tagStyles[tag.color] ?? tagStyles.green;
            return (
              <span
                key={tag.label}
                className="rounded-[8px] px-3 py-0.5 text-xs font-semibold tracking-wide"
                style={{ background: style.bg, color: style.text }}
              >
                {tag.label}
              </span>
            );
          })}
        </div>

        <h3 className="text-base font-bold text-[#1f1f1f] mb-2">{project.title}</h3>
        <p className="text-sm text-[#777] flex-1 leading-relaxed">{project.description}</p>

        {project.liveUrl && (
          <div className="mt-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-bold transition-all duration-200 hover:gap-2"
              style={{ color: '#2dc56a' }}
            >
              Live Demo <span aria-hidden>→</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
