import { render, screen } from "@testing-library/react-native";
import Loader from "@/components/loader";

test("Loader renders properly", () => {
  render(<Loader />);

  expect(screen.toJSON()).toMatchSnapshot();
});
