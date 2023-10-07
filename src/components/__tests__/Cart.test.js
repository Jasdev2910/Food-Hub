import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import resMenuMock from "../mocks/resMenuMock.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(resMenuMock),
  })
);

it("Should load RestaurantMenu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordianHeader = screen.getByText("Beverage Combos (2)");

  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(2);
});

it("Should add one item to the cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordianHeader = screen.getByText("Beverage Combos (2)");

  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(2);

  expect(screen.getByText("( 0 )")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add+" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("( 1 )")).toBeInTheDocument();
});

it("Should add two item to the cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordianHeader = screen.getByText("Beverage Combos (2)");

  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(2);

  const addBtns = screen.getAllByRole("button", { name: "Add+" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("( 2 )")).toBeInTheDocument();
});

it("Should add one item to the cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordianHeader = screen.getByText("Beverage Combos (2)");

  fireEvent.click(accordianHeader);

  //   expect(screen.getAllByTestId("foodItems").length).toBe(2);

  const addBtns = screen.getAllByRole("button", { name: "Add+" });

  fireEvent.click(addBtns[0]);

  //   expect(screen.getByText("( 2 )")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  fireEvent.click(screen.getByRole("button", { name: "Clear" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(2);

  expect(screen.getByText("Cart is Empty!"));
});
