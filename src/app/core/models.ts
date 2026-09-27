export type IconName =
  | 'factory'
  | 'glass'
  | 'steel'
  | 'aluminium'
  | 'concrete'
  | 'hardware'
  | 'shield'
  | 'truck'
  | 'ruler'
  | 'flask'
  | 'leaf'
  | 'clock'
  | 'globe'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'play'
  | 'menu'
  | 'close'
  | 'chevron-down'
  | 'check'
  | 'phone'
  | 'mail'
  | 'pin'
  | 'building'
  | 'box';

export interface Stat {
  value: string;
  label: string;
}

export interface Factory {
  slug: string;
  name: string;
  short: string;
  division: string;
  icon: IconName;
  city: string;
  area: string;
  established: number;
  headcount: number;
  capacity: string;
  summary: string;
  description: string;
  lines: string[];
  certifications: string[];
  stats: Stat[];
}

export interface Product {
  id: string;
  name: string;
  factorySlug: string;
  category: string;
  spec: string;
  leadTime: string;
  moq: string;
  whiteLabel: boolean;
}

export interface Capability {
  icon: IconName;
  title: string;
  body: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readMinutes: number;
  icon: IconName;
}

export interface Milestone {
  year: string;
  title: string;
  body: string;
}

export interface Leader {
  name: string;
  role: string;
  initials: string;
}
