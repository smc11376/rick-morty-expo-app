import { ActivityIndicator, StyleSheet } from "react-native";

export default function Loader() {
  return <ActivityIndicator style={styles.loader} color="white" size="large" />;
}

const styles = StyleSheet.create({
  loader: {
    marginVertical: 50,
    justifyContent: "center",
  },
});
