import React from 'react';
import './Works.css';
import { Card } from './Card';

const projects = [
  {
    id: 'puyo-puyo',
    title: 'ぷよぷよ風パズルゲーム',
    description: 'ReactとCanvasを用いたブラウザ向けのパズルゲーム。AIによる盤面評価アルゴリズムの実装例。',
    image: '/image/puyo-puyo-game.png',
    tags: ['React', 'Game Development', 'AI']
  },
  {
    id: 'court-battle',
    title: '法廷バトルゲーム',
    description: '証拠品と証言を突きつけるアドベンチャーゲーム。LLMを活用した動的な会話生成システムを搭載。',
    image: '/image/court-battle-game.png',
    tags: ['Next.js', 'LLM API', 'Prompt Engineering']
  },
  {
    id: 'ocr-web',
    title: 'レシートOCR Webアプリ',
    description: '画像からテキストを高精度に抽出するWebツール。業務効率化AIのプロトタイプ実装。',
    image: '/image/ocr-web-app.png',
    tags: ['Python', 'FastAPI', 'OCR']
  },
  {
    id: 'kuchikomi',
    title: '口コミ・グルメポータル',
    description: '飲食店の口コミを集約するプラットフォーム。ユーザーの嗜好に基づく推薦AIエンジンを導入。',
    image: '/image/kuchikomi-gourmet.png',
    tags: ['Vue.js', 'Node.js', 'Machine Learning']
  },
  {
    id: '5chbbs',
    title: '5ch風 匿名掲示板',
    description: 'スレッド形式の掲示板システム。AIによる不適切発言の自動モデレーション機能を搭載。',
    image: '/image/5chbbs.png',
    tags: ['PHP', 'MySQL', 'Content Moderation']
  },
  {
    id: 'tatenaga-lp',
    title: 'コンバージョン改善 LP',
    description: '縦長ランディングページの最適化テスト事例。A/Bテストデータに基づくAIコピーライティングを適用。',
    image: '/image/tatenagalp-lp.png',
    tags: ['HTML/CSS', 'Marketing', 'Generative AI']
  }
];

export const Works: React.FC = () => {
  return (
    <section className="works-section" id="works">
      <div className="container">
        <div className="works-header animate-fade-up">
          <span className="works-header-badge">Projects</span>
          <h2>Featured Works</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
            AIとWeb技術を組み合わせた開発実績
          </p>
        </div>
        
        <div className="works-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-fade-up" 
              style={{ animationDelay: `${(index % 3 + 1) * 150}ms` }}
            >
              <Card className="work-card">
                <div className="work-image-container">
                  <img src={project.image} alt={project.title} className="work-image" />
                  <div className="work-overlay">
                    <span className="work-overlay-btn">View Details</span>
                  </div>
                </div>
                <div className="work-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="work-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="work-title">{project.title}</h3>
                <p className="work-description">{project.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
