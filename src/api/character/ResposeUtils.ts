import { CharacterNetType, GetAllCharactersNetType } from "@/api/character/NetTypes";
import { Character, ShortCharacter } from "@/domain-models/character";

export function transformGetAllCharactersResponse(response?: GetAllCharactersNetType): ShortCharacter[] {
  if (!response) return [];

  return response.results.map(item => ({
    id: item.id,
    name: item.name,
    status: item.status,
    image: item.image,
  }));
}

export function transformGetCharacterByIdResponse(response?: CharacterNetType): Character | undefined {
  if (!response) return undefined;

  return {
    id: response.id,
    name: response.name,
    status: response.status,
    species: response.species,
    type: response.type,
    gender: response.gender,
    origin: response.origin,
    location: response.location,
    image: response.image,
    numberOfEpisodes: response.episode?.length || 0,
  };
}
