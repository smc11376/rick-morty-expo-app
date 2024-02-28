export type ItemWithUrl = {
  name: string;
  url: string;
};

export type ShortCharacter = {
  id: number;
  name: string;
  status: string;
  image: string;
};

export type Character = ShortCharacter & {
  species: string;
  type: string;
  gender: string;
  origin: ItemWithUrl;
  location: ItemWithUrl;
  numberOfEpisodes: number;
};
