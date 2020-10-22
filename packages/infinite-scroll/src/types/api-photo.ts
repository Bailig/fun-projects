export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface APIPhoto {
  id: string;
  urls: Urls;
  alt_description: string;
}
