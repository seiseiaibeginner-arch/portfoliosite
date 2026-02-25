export type TagColor =
  | 'green'
  | 'blue'
  | 'pink'
  | 'yellow'
  | 'purple'
  | 'sky';

export interface Tag {
  label: string;
  color: TagColor;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: Tag[];
  liveUrl?: string;
}

export interface Stat {
  value: string;
  label: string;
  accent?: boolean;
}

export interface TechCategory {
  icon: string;
  title: string;
  color: string;
  items: string[];
}
