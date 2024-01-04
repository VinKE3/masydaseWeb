export type ImageData = {
  src: string;
  alt: string;
};

export type ServicesData = {
  id: number;
  title: string;
  title2: string;
  description: string;
  image: ImageData;
}[];
