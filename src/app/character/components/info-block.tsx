import { StyleSheet, Text, View } from "react-native";
import { openUrl } from "@/libs/linking";

type InfoBlockProps = {
  label: string;
  data: string | undefined;
  urlToOpen?: string | undefined;
};

export default function InfoBlock({ label, data, urlToOpen }: InfoBlockProps) {
  return (
    <View style={[styles.blockContainer, !urlToOpen && styles.blockRowContainer]}>
      <Text style={styles.label}>{label}</Text>
      <Text testID="info-block-url" style={styles.text} onPress={() => openUrl(urlToOpen)}>
        {data || "-"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  blockRowContainer: {
    flexDirection: "row",
  },
  blockContainer: {
    padding: 16,
    paddingBottom: 0,
  },
  label: {
    fontSize: 20,
    color: "grey",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});
