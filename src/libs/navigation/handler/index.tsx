import { Stack } from "expo-router";
import { CHARACTER_DETAIL_PATH, HOME_PATH } from "@/libs/navigation/pathRoutes";
import BackButton from "@/libs/navigation/handler/components/back-button";

function RootNavigator() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{ headerLeft: BackButton, headerTitleStyle: { fontWeight: "bold" } }}>
      <Stack.Screen name={HOME_PATH} options={{ headerShown: false }} />
      <Stack.Screen name={CHARACTER_DETAIL_PATH} options={{ headerShown: true }} />
    </Stack>
  );
}

export default RootNavigator;
