import { render, screen } from "@testing-library/react";
import Offer from "../Offer";
import "@testing-library/jest-dom";

test("should load Offer component", () => {
  render(<Offer />);

  const heading = screen.getByText("Offers Available");

  expect(heading).toBeInTheDocument();
});
