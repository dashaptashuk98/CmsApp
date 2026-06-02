import type { RichTextBlock, StrapiImage } from "./strapi";

export interface StrapiHeroItem {
  id: number;
  title?: RichTextBlock[];
  decription?: RichTextBlock[];
  img?: StrapiImage[];
}

export interface TransformedHeroItem {
  title: string | null;
  description: string | null;
  imgUrl: string | null;
}

export interface StrapiResponse {
  data?: StrapiHeroItem[];
}
