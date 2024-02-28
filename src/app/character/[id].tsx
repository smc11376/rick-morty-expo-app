import { ScrollView, StyleSheet, View } from "react-native";
import { useGlobalSearchParams, useNavigation } from "expo-router";
import { useGetCharacterById } from "@/api/character";
import { useEffect } from "react";
import Loader from "@/components/loader";
import Row from "@/app/character/components/row";
import InfoBlock from "@/app/character/components/info-block";
import CharacterImage from "@/app/character/components/character-image";

export default function CharacterDetailScreen() {
  const params = useGlobalSearchParams();
  const { character, isLoading } = useGetCharacterById(params.id as string);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: params.characterName });
  }, [params.characterName]);

  return isLoading ? (
    <View style={styles.container}>
      <Loader />
    </View>
  ) : (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
      <CharacterImage uri={character?.image} />
      <Row>
        <InfoBlock label="Gender: " data={character?.gender} />
        <InfoBlock label="Status: " data={character?.status} />
      </Row>
      <Row>
        <InfoBlock label="Species: " data={character?.species} />
        {character?.type !== "" && <InfoBlock label="Type: " data={character?.type} />}
      </Row>
      <InfoBlock label="Number of episodes: " data={character?.numberOfEpisodes.toString()} />
      <InfoBlock label="Origin: " data={character?.origin.name} urlToOpen={character?.origin.url} />
      <InfoBlock label="Current location: " data={character?.location.name} urlToOpen={character?.location.url} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(60, 62, 68)",
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
