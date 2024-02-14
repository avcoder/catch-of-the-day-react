export type Fish = {
  name: string;
  price: number;
  status: string;
  desc: string;
  image: string;
};

export type Fishes = {
  [key: string]: Fish;
};
