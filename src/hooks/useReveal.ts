import { useEffect, useRef } from 'react';

export function useReveal<T extends HTMLElement = HTMLElement>(immediate = false) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // immediate=true のとき（Hero など初期表示）は遅延後に全要素を表示
    if (immediate) {
      const timer = setTimeout(() => {
        el.querySelectorAll('.reveal').forEach((t) => t.classList.add('visible'));
      }, 100);
      return () => clearTimeout(timer);
    }

    // セクション全体が viewport に入ったとき、内部の全 .reveal を visible にする
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.reveal')
              .forEach((t) => t.classList.add('visible'));
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }
    );

    sectionObserver.observe(el);

    return () => sectionObserver.disconnect();
  }, [immediate]);

  return ref;
}
