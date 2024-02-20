import { useParams } from "react-router-dom";
import useRestauranrMenu from "../utils/useRestaurantMenu";
import Accordian from "./Accordian";
import React, { useState } from "react";
import StarsIcon from "@mui/icons-material/Stars";
import ShimmerMenu from "./ShimmerMenu";
import { useEffect } from "react";
import { addItem, addRestaurant } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestauranrMenu(resId); //custom Hook
  const [showIndex, setShowIndex] = useState(true);
  const dispatch = useDispatch();
  const cartResName = useSelector((store) => store.cart.resName);
  const notify = () => toast("Order Pending from another Restaurant");
  const notifySuccess = () => toast("Added to Cart");

  console.log(resInfo);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const toggleAccordion = (index) => {
    if (showIndex === index) {
      setShowIndex(null); // Close the accordion if it's already open
    } else {
      setShowIndex(index); // Open the accordion
    }
  };

  console.log(categories);
  console.log(resInfo);

  const location = resInfo?.cards[0]?.card?.card?.info?.areaName;
  const handleClick = (menuItem) => {
    const resName = resInfo?.cards[0]?.card?.card?.info?.name;
    if (cartResName === null || resName === cartResName) {
      dispatch(addRestaurant({ resName: resName, location: location }));
      dispatch(addItem(menuItem));
      notifySuccess();
    } else {
      notify();
    }
    console.log(menuItem);
  };

  return resInfo === null ? (
    <ShimmerMenu />
  ) : (
    <div className="max-w-3xl mx-auto pt-24">
      <div className="flex-col">
        <div className="flex-col">
          <div className="flex justify-between items-center">
            <div className="mx-3 py-5">
              <h1 className="text-3xl">
                {resInfo?.cards[2]?.card?.card?.info?.name}
              </h1>
              <p className="font-light py-1">
                {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
              </p>
              <p className="font-light py-1">
                {resInfo?.cards[2]?.card?.card?.info?.areaName}
              </p>
              <p className="font-light py-1">
                {resInfo?.cards[2]?.card?.card?.info?.feeDetails?.message}
              </p>
            </div>
            <div className="w-10 text-center text-lg">
              <h3>
                <StarsIcon className="text-green-600 mr-1 medium" />
                {resInfo?.cards[2]?.card?.card?.info?.avgRating}
              </h3>
            </div>
          </div>
          <div className="max-w-3xl h-[0.5px] bg-slate-300 "></div>
          <div className="flex text-lg font-bold p-3">
            <h3>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
            <h3 className="ml-7 flex items-center">
              <AccessTimeIcon />
              {resInfo?.cards[2]?.card?.card?.info?.sla?.deliveryTime} Minutes
            </h3>
          </div>
        </div>
        <div className="max-w-3xl h-[0.5px] bg-slate-300 "></div>
        <div className="flex-col">
          {categories?.map((category, index) => (
            <Accordian
              handleClick={handleClick}
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showMenuItem={index === showIndex ? true : false}
              showIndex={showIndex}
              // setShowIndex={() => setShowIndex(index)}
              toggleAccordion={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default RestaurantMenu;

// const { name, cuisines, areaName, avgRating, costForTwoMessage } =
//   resInfo?.cards[0]?.card?.card?.info;

// const { itemCards } =
//   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

// const { itemCards2 } =
//   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

// console.log(itemCards);

// {(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.hasOwnProperty(
//   "carousel"
// )
//   ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
//       ?.card?.card?.itemCards
//   : resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
//       ?.card?.card?.itemCards
// )?.map((item, index) => (
//   <MenuItem key={index} menu={item} />
// ))}
