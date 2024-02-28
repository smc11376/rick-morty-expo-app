import { StyleSheet, TouchableOpacity } from "react-native";
import { goBack } from "@/libs/navigation";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function BackButton() {
  return (
    <TouchableOpacity style={styles.container} onPress={goBack}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    justifyContent: "center",
  },
});
