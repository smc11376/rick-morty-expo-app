import { render, screen } from "@testing-library/react-native";
import Home from "@/app/home/Home";

jest.mock("@/api/character", () => ({
  useGetAllCharacters: () => ({
    characters: [],
    isLoading: false,
    nextPage: null,
  }),
}));

test("Home renders isLoading", () => {
  render(<Home />);

  expect(screen.toJSON()).toMatchSnapshot();
});
