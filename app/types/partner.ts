import type { StrapiImage } from "./strapi";

export interface Partner {
  id: number;
  title: string;
  text?: string;
  desc?: string;
  logo?: StrapiImage;
  bg?: StrapiImage;
}

export interface PartnerResponse {
  data?: Partner[];
}

export interface PartnerProps {
  title: string;
  subtitle: string;
  description: string;
  logo: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
}
