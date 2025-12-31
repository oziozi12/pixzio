
export enum ContextMode {
  INSTAGRAM = 'Instagram Post',
  YOUTUBE = 'YouTube Thumbnail',
  PRODUCT = 'Product Image',
  PORTFOLIO = 'Portfolio Cover'
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface GeneratedContent {
  caption: string;
  hashtags: string[];
  seoDescription: string;
  altText: string;
  titleSuggestion: string;
}

export interface Variant {
  id: number;
  name: string;
  imageUrl: string;
  lighting: string;
  crop: string;
}
