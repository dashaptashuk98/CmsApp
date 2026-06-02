import type { StrapiImage } from "./strapi";

export interface Service {
  id: number;
  title: string;
  description: string;
  img?: { url: string };
}

export interface Value {
  id: number;
  title: string;
  description: string;
  logo?: StrapiImage;
}

export interface Values {
  id: number;
  title: string;
  description: string;
  logo?: { url: string };
}
