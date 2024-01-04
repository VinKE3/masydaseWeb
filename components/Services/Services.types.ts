export type ImageData = {
  src: string;
  alt: string;
};

export type ServicesData = {
  id: number;
  title: string;
  description: string;
  image: ImageData;
}[];
