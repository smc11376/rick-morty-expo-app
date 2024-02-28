import { useGetApiService } from "@/libs/network";
import { CharacterNetType, GetAllCharactersNetType } from "@/api/character/NetTypes";
import { transformGetAllCharactersResponse, transformGetCharacterByIdResponse } from "@/api/character/ResposeUtils";
import { Character, ShortCharacter } from "@/domain-models/character";
import { useEffect, useMemo, useState } from "react";

type UseAllCharactersType = {
  characters: ShortCharacter[];
  nextPage: string | null | undefined;
  isLoading: boolean;
};

type UseCharacterType = {
  character: Character | undefined;
  isLoading: boolean;
};

export function useGetAllCharacters(newUrl: string | null | undefined): UseAllCharactersType {
  const [characters, setCharacters] = useState<ShortCharacter[]>([]);
  const { data, isLoading, isFetching, isRefetching } = useGetApiService<GetAllCharactersNetType>(
    newUrl || "/character",
  );
  const newCharacters = useMemo(() => transformGetAllCharactersResponse(data), [data?.results]);

  useEffect(() => {
    if (!isLoading && !isFetching && !isRefetching) {
      setCharacters(currentCharacters => {
        return [...new Set([...currentCharacters, ...newCharacters])];
      });
    }
  }, [newCharacters]);

  return {
    characters,
    isLoading: isLoading || isFetching || isRefetching,
    nextPage: data?.info.next,
  };
}

export function useGetCharacterById(id?: string): UseCharacterType {
  if (!id) throw new Error("Oops! There is no character to find!");

  const { data, isLoading, isFetching, isRefetching } = useGetApiService<CharacterNetType>(`/character/${id}`);
  const character = transformGetCharacterByIdResponse(data);
  return {
    character,
    isLoading: isLoading || isFetching || isRefetching,
  };
}
