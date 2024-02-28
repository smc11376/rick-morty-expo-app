import { render, screen } from "@testing-library/react-native";
import CharacterDetailScreen from "@/app/character/[id]";

jest.mock("@/api/character", () => ({
  useGetCharacterById: () => ({
    character: undefined,
    isLoading: true,
  }),
}));

test("CharacterDetailScreen renders isLoading", () => {
  render(<CharacterDetailScreen />);

  expect(screen.toJSON()).toMatchSnapshot();
});
