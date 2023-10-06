import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import ResListMockData from "../mocks/resListMockData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(ResListMockData);
    },
  });
});

it("Should Search res List for pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: /search/i });
  //   console.log(searchBtn);

  const searchInput = screen.getByTestId("searchInput");
  //   console.log(searchInput);

  fireEvent.change(searchInput, { target: { value: "pizza" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  //   console.log(cards);

  expect(cardsAfterSearch.length).toBe(4);
});

it("Should Search filtred restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(20);

  const filterBtn = screen.getByRole("button", { name: "Filter" });

  fireEvent.click(filterBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(8);
});
