import * as Linking from "expo-linking";

export function openUrl(url?: string) {
  if (!url) return;
  Linking.canOpenURL(url).then(canOpen => {
    if (canOpen) Linking.openURL(url);
  });
}
