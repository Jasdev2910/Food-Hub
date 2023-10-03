import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Help from "../Help";

test("Should load help component", () => {
  render(<Help />);

  const heading = screen.getByText("Help & Support");

  expect(heading).toBeInTheDocument();
});
