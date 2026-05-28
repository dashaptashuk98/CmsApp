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
