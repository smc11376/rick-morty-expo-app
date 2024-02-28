import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ShortCharacter } from "@/domain-models/character";
import { getStatusColor } from "@/components/character-card/CharacterCard.Utils";

type CharacterCardProps = {
  character: ShortCharacter;
  onPressCharacter: () => void;
};

const CARD_HEIGHT = 80;
const CARD_WIDTH = 80;
const CARD_PADDING_VERTICAL = 8;
export const CARD_SIZE = CARD_HEIGHT + 2 * CARD_PADDING_VERTICAL;

export default function CharacterCard({ character, onPressCharacter }: CharacterCardProps) {
  const { name, image, status } = character;
  return (
    <TouchableOpacity testID="character-card-wrapper" style={styles.wrapper} onPress={onPressCharacter}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image }} resizeMode="contain" />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.status}>
            {"Status: "}
            <Text style={getStatusColor(status)}>{status}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 24,
    paddingVertical: CARD_PADDING_VERTICAL,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(60, 62, 68)",
    minHeight: CARD_HEIGHT,
    width: "100%",
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    padding: 8,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  status: {
    fontSize: 12,
    color: "white",
  },
  image: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});
