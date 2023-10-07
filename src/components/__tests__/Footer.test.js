import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import "@testing-library/jest-dom";

it("should render Footer component", () => {
  render(<Footer />);

  const text = screen.getByText("Company");

  expect(text).toBeInTheDocument();
});
