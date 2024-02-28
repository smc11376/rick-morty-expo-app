import { fireEvent, render, screen } from "@testing-library/react-native";
import CharacterCard from "@/components/character-card";
import { ShortCharacter } from "@/domain-models/character";

describe("CharacterCard renders properly with:", () => {
  it("Alive status", () => {
    const onPressCharacterMock = jest.fn();
    const mockShortCharacter: ShortCharacter = {
      id: 1,
      name: "testing name",
      status: "Alive",
      image: "https://rickandmortyapi.com/api/character/avatar/400.jpeg",
    };
    render(<CharacterCard character={mockShortCharacter} onPressCharacter={onPressCharacterMock} />);

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it("Dead status", () => {
    const onPressCharacterMock = jest.fn();
    const mockShortCharacter: ShortCharacter = {
      id: 1,
      name: "testing name",
      status: "Dead",
      image: "https://rickandmortyapi.com/api/character/avatar/400.jpeg",
    };
    render(<CharacterCard character={mockShortCharacter} onPressCharacter={onPressCharacterMock} />);

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it("unknown status", () => {
    const onPressCharacterMock = jest.fn();
    const mockShortCharacter: ShortCharacter = {
      id: 1,
      name: "testing name",
      status: "unknown",
      image: "https://rickandmortyapi.com/api/character/avatar/400.jpeg",
    };
    render(<CharacterCard character={mockShortCharacter} onPressCharacter={onPressCharacterMock} />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});

describe("CharacterCard actions:", () => {
  it("press on wrapper", () => {
    const onPressCharacterMock = jest.fn();
    const mockShortCharacter: ShortCharacter = {
      id: 1,
      name: "testing name",
      status: "Alive",
      image: "https://rickandmortyapi.com/api/character/avatar/400.jpeg",
    };
    render(<CharacterCard character={mockShortCharacter} onPressCharacter={onPressCharacterMock} />);

    fireEvent.press(screen.getByTestId("character-card-wrapper"));
    expect(onPressCharacterMock).toHaveBeenCalled();
  });
});
