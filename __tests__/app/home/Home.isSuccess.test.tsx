import { fireEvent, render, screen, waitFor } from "@testing-library/react-native";
import Home from "@/app/home/Home";
import { ShortCharacter } from "@/domain-models/character";
import * as Navigation from "@/libs/navigation";

const characterMock: ShortCharacter = {
  id: 1,
  name: "Testing Name",
  status: "Alive",
  image: "https://rickandmortyapi.com/api/character/avatar/400.jpeg",
};

jest.mock("@/api/character", () => ({
  useGetAllCharacters: () => ({
    characters: [characterMock],
    isLoading: false,
    nextPage: null,
  }),
}));

test("Home renders isSuccess", () => {
  render(<Home />);

  expect(screen.toJSON()).toMatchSnapshot();
});

test("Home actions", async () => {
  const goToCharacterDetailMock = jest.spyOn(Navigation, "goToCharacterDetail");
  render(<Home />);

  fireEvent.press(screen.getAllByTestId("character-card-wrapper")[0]);
  await waitFor(() => expect(goToCharacterDetailMock).toHaveBeenCalled());
});
