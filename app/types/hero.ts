import type { RichTextBlock, StrapiImage } from "./strapi";

export interface StrapiHeroItem {
  id: number;
  title?: RichTextBlock[];
  decription?: RichTextBlock[];
  img?: StrapiImage[];
}

export interface StrapiResponse {
  data?: StrapiHeroItem[];
}
