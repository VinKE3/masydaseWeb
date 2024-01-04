export type ImageData = {
  src: string;
  alt: string;
};

export type DesarrolloWebData = {
  id: number;
  title: string;
  image: ImageData;
  data: [
    {
      id: number;
      title: string;
      description: string;
    },
    {
      id: number;
      title: string;
      description: string;
    },
    {
      id: number;
      title: string;
      description: string;
    },
    {
      id: number;
      title: string;
      description: string;
    }
  ];
}[];
