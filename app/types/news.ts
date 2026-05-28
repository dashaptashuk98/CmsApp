import type { StrapiImage } from "./strapi";

export interface NewsTag {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface NewsItem {
  id: number;
  authorName: string;
  data: string;
  description: string;
  logo: StrapiImage;
  tags?: NewsTag[];
}

export interface NewsResponse {
  data?: NewsItem[];
}

export interface TextBlock {
  __component: "news.text";
  id: number;
  Name: string;
}

export interface DescBlock {
  __component: "news.desc";
  id: number;
  description: string;
}

export interface Point1Block {
  __component: "news.point1";
  id: number;
  point1: string;
}

export interface Point2Block {
  __component: "news.point2";
  id: number;
  point2: string;
}

export interface Point3Block {
  __component: "news.point3";
  id: number;
  point3: string;
}

export type ContentBlock = TextBlock | DescBlock | Point1Block | Point2Block | Point3Block;

export interface ContentGroup {
  text: TextBlock;
  desc: DescBlock | null;
  points: (Point1Block | Point2Block | Point3Block)[];
}

export interface Headline {
  id: number;
  title: string;
  author: string;
  date: string;
  description: string;
  logo: StrapiImage;
  imageUrl?: string | null;
  tags: NewsTag[];
  ContentBlock?: ContentBlock[];
}
