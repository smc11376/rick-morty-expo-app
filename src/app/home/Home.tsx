import { FlatList, StyleSheet, View } from "react-native";
import { useGetAllCharacters } from "@/api/character";
import { useCallback, useState } from "react";
import CharacterCard from "@/components/character-card";
import { ShortCharacter } from "@/domain-models/character";
import { goToCharacterDetail } from "@/libs/navigation";
import HomeHeader from "@/app/home/components/HomeHeader";
import Loader from "@/components/loader";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<string | null | undefined>(null);
  const { characters, isLoading, nextPage } = useGetAllCharacters(currentPage);

  const renderCharacterCard = useCallback(
    (item: ShortCharacter) => (
      <CharacterCard character={item} onPressCharacter={() => goToCharacterDetail(item.id, item.name)} />
    ),
    [characters],
  );

  function handleLoadMore() {
    !!nextPage && setCurrentPage(nextPage);
  }

  return (
    <View style={styles.container}>
      <HomeHeader />
      <FlatList
        data={characters}
        renderItem={({ item }) => renderCharacterCard(item)}
        keyExtractor={item => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.3}
        ListFooterComponent={() => (isLoading ? <Loader /> : null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(39, 43, 51)",
  },
});
