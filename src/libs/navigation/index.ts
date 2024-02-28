import { router } from "expo-router";
import { CHARACTER_DETAIL_PATH, HOME_PATH } from "@/libs/navigation/pathRoutes";

function goToPath(path: string, params?: any) {
  router.navigate(path);
  router.setParams(params);
}

export function goBack() {
  router.back();
}

export function goToHome() {
  goToPath(HOME_PATH);
}

export function goToCharacterDetail(id: number, characterName: string) {
  goToPath(CHARACTER_DETAIL_PATH.replace("[id]", id.toString()), { characterName });
}
