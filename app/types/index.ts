export interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
}

export interface StrapiHeroItem {
  id: number;
  title?: RichTextBlock[];
  decription?: RichTextBlock[];
  img?: StrapiImage[];
}

export interface RichTextChild {
  text: string;
}

export interface RichTextBlock {
  children?: RichTextChild[];
}

export interface StrapiHeroItem {
  title?: RichTextBlock[];
  decription?: RichTextBlock[];
  img?: StrapiImage[];
}

export interface NewsTag {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface AboutCard {
  id: number;
  name: string;
  description: string;
  buttonText: string;
}

export interface StrapiResponse {
  data?: StrapiHeroItem[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  img?: StrapiImage;
}

export interface Partner {
  id: number;
  title: string;
  text?: string;
  desc?: string;
  logo?: StrapiImage;
  bg?: StrapiImage;
}

export interface NewsItem {
  id: number;
  authorName: string;
  data: string;
  description: string;
  logo: StrapiImage;
  tags?: NewsTag[];
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

export interface ContentGroup {
  text: TextBlock;
  desc: DescBlock | null;
  points: (Point1Block | Point2Block | Point3Block)[];
}

export interface PartnerResponse {
  data?: Partner[];
}

export interface Location {
  id: number;
  Name: string;
  Address: string;
  Manager: string;
  Phone: string;
  Email: string;
  Distance?: string;
  Latitude: number;
  Longitude: number;
}

export interface MappedLocation {
  id: number;
  name: string;
  address: string;
  manager: string;
  phone: string;
  email: string;
  distance: string;
  lat: number;
  lng: number;
}

export interface NominatimResult {
  lat: string;
  lon: string;
}

export interface LocationResponse {
  data?: Location[];
}

export interface Value {
  id: number;
  title: string;
  description: string;
  logo?: StrapiImage;
}

export interface NewsResponse {
  data?: NewsItem[];
}
