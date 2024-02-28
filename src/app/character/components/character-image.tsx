import { Image, StyleSheet } from "react-native";

type CharacterImageProps = {
  uri: string | undefined;
};

export default function CharacterImage({ uri }: CharacterImageProps) {
  return <Image style={styles.image} source={{ uri }} resizeMode="contain" />;
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
