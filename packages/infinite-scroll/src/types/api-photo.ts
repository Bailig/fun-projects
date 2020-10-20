export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface ApiPhoto {
  id: string;
  urls: Urls;
  alt_description: string;
}
