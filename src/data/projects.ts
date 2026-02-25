import type { Project, Stat, TechCategory } from '../types';

export const projects: Project[] = [
  {
    id: 'kuchikomi-gourmet',
    title: 'クチコミグルメ',
    description: '登録不要で使えるグルメ口コミ掲示板。エリア・カテゴリ検索や店舗登録機能を実装。',
    image: '/portfoliosite/image/kuchikomi-gourmet.png',
    tags: [
      { label: 'Next.js', color: 'green' },
      { label: 'Vercel',  color: 'green' },
    ],
    liveUrl: 'https://kuchikomi-gourmet.vercel.app',
  },
  {
    id: 'puyo-puyo-game',
    title: 'ぷよぷよパズルゲーム',
    description: 'スーパーファミコン風レトロスタイルのぷよぷよパズルゲーム。Claude Codeで実装。',
    image: '/portfoliosite/image/puyo-puyo-game.png',
    tags: [
      { label: 'Next.js',     color: 'pink' },
      { label: 'Claude Code', color: 'pink' },
    ],
    liveUrl: 'https://claudecode-vert.vercel.app',
  },
  {
    id: '5chbbs',
    title: '5ch風掲示板',
    description: '5ちゃんねる風のスレッド型掲示板。匿名投稿・スレッド作成機能を実装。',
    image: '/portfoliosite/image/5chbbs.png',
    tags: [
      { label: 'Web App', color: 'blue' },
      { label: 'Vercel',  color: 'blue' },
    ],
    liveUrl: 'https://5chbbs-gules.vercel.app',
  },
  {
    id: 'tatenagalp',
    title: 'バイブコーディング講座LP',
    description: 'AIと対話するだけでアプリが作れる「バイブコーディング」の2日間集中講座向けランディングページ。',
    image: '/portfoliosite/image/tatenagalp-lp.png',
    tags: [
      { label: 'HTML/CSS',     color: 'yellow' },
      { label: 'Landing Page', color: 'yellow' },
    ],
  },
  {
    id: 'court-battle-game',
    title: 'コートバトルゲーム',
    description: 'Dify AIを活用したコート上での対話型バトルゲーム。Python + Dify APIで実装。',
    image: '/portfoliosite/image/court-battle-game.png',
    tags: [
      { label: 'Python', color: 'purple' },
      { label: 'Dify',   color: 'purple' },
    ],
  },
  {
    id: 'ocr-web-app',
    title: '画像OCR文字起こしアプリ',
    description: 'Streamlit + Gemini 2.0 Flash APIを使った画像OCRアプリ。複数ファイル対応・TXT/Markdown出力。',
    image: '/portfoliosite/image/ocr-web-app.png',
    tags: [
      { label: 'Python',    color: 'sky' },
      { label: 'Streamlit', color: 'sky' },
      { label: 'Gemini',    color: 'sky' },
    ],
  },
];

export const stats: Stat[] = [
  { value: '6',   label: 'Projects' },
  { value: '10+', label: 'Technologies' },
  { value: 'V',   label: 'Vercel Deploy', accent: true },
];

export const techCategories: TechCategory[] = [
  {
    icon: '🤖',
    title: 'AI / LLM',
    color: 'green',
    items: ['Claude Code', 'Gemini API', 'Dify', 'fal.ai'],
  },
  {
    icon: '⚡',
    title: 'Frontend',
    color: 'blue',
    items: ['Next.js', 'React', 'Tailwind CSS', 'HTML / CSS / JS'],
  },
  {
    icon: '🐍',
    title: 'Backend / Tools',
    color: 'yellow',
    items: ['Python', 'Streamlit', 'Node.js'],
  },
  {
    icon: '🚀',
    title: 'Deploy',
    color: 'purple',
    items: ['Vercel', 'GitHub Pages', 'GitHub Actions'],
  },
];
