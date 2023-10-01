import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Offers from "./components/Offer";
import Help from "./components/Help";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import appStore from "./utils/appStore";
import Footer from "./components/Footer";

// import Groceries from "./components/Groceries";

const Groceries = lazy(() => import("./components/Groceries"));

const App = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Jasdev",
    };
    setUserName(data?.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/groceries",
        element: (
          <Suspense>
            <Groceries />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
