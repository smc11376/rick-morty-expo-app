export type CharacterNetType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginOrLocationNetType;
  location: OriginOrLocationNetType;
  image: string;
  episode?: string[] | null;
  url: string;
  created: string;
};

export type OriginOrLocationNetType = {
  name: string;
  url: string;
};

export type GetAllCharactersNetType = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: CharacterNetType[];
};
