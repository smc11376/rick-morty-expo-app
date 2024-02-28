import { StyleSheet, View } from "react-native";
import { PropsWithChildren } from "react";

export default function Row({ children }: PropsWithChildren) {
  return <View style={styles.rowContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
