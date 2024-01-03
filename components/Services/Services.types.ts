export type ImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

export type ServicesData = {
  id: number;
  title: string;
  description: string;
  image: ImageData;
}[];
