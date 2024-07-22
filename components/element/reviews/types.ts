export interface Review {
  author: string;
  avatar: string;
  position?: string;
  company?: string;
  rating?: number;
  content: string;
  source: string;
  isTranslated?: boolean;
}
