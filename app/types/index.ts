export interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
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
  tags?: string[];
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
