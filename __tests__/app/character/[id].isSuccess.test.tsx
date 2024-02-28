import { fireEvent, render, screen, waitFor } from "@testing-library/react-native";
import CharacterDetailScreen from "@/app/character/[id]";
import { Character } from "@/domain-models/character";
import * as Linking from "@/libs/linking";

const characterMock: Character = {
  id: 1,
  name: "Testing Name",
  status: "Alive",
  image: "https://rickandmortyapi.com/api/character/avatar/400.jpeg",
  species: "Testing species",
  type: "Testing types",
  gender: "Testing gender",
  origin: {
    name: "Testing name",
    url: "Testing url",
  },
  location: {
    name: "Testing name",
    url: "Testing url",
  },
  numberOfEpisodes: 22,
};

jest.mock("@/api/character", () => ({
  useGetCharacterById: () => ({
    character: characterMock,
    isLoading: false,
  }),
}));

test("CharacterDetailScreen renders isSuccess", () => {
  render(<CharacterDetailScreen />);

  expect(screen.toJSON()).toMatchSnapshot();
});

test("CharacterDetailScreen actions", async () => {
  const openUrlMock = jest.spyOn(Linking, "openUrl");
  render(<CharacterDetailScreen />);

  fireEvent.press(screen.getAllByTestId("info-block-url")[0]);
  await waitFor(() => expect(openUrlMock).toHaveBeenCalled());
});
