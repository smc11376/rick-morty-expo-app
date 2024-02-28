jest.mock("expo-router", () => ({
  router: {
    navigate: () => {},
    setParams: () => {},
  },
  useNavigation: () => ({
    setOptions: () => {},
  }),
  useGlobalSearchParams: () => ({
    id: 3,
    characterName: "Test Character Name",
  }),
}));

jest.mock("react-native-safe-area-context", () => ({
  useSafeAreaInsets: () => ({
    top: 20,
  }),
}));
