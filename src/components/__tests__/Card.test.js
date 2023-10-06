import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import Card from "../Card";

it("Should render Card component with props data", () => {
  render(<Card resData={MOCK_DATA} />);

  const name = screen.getByText("The Biryani Life");

  expect(name).toBeInTheDocument();
});
