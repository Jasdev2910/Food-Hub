import React from "react";
import { MENU_ITEM_IMG } from "../utils/constants";
import { useSelector } from "react-redux";

const CartItems = ({ menuItem }) => {
  const cart = useSelector((store) => store.cart);

  return (
    <div className="flex p-4 w-full">
      <div className="">
        <img
          className="w-[130px] h-[100px] object-fill rounded-lg"
          alt="img"
          src={MENU_ITEM_IMG + menuItem?.card?.info?.imageId}
        />
      </div>
      <div className="flex flex-col justify-between px-4">
        <div>
          <h3 className="text-lg font-semibold">
            {menuItem?.card?.info?.name}
          </h3>
          <p className="">{"₹" + menuItem?.card?.info?.price / 100}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="pr-5 py-2">
            <button className="px-4 py-1 rounded-xl font-semibold text-sm bg-white hover:bg-gray-900 hover:text-white hover:shadow-2xl ">
              -
            </button>
            <span className="p-2">{menuItem?.card?.info?.inStock}</span>
            <button className="px-4 py-1 rounded-xl font-semibold text-sm bg-white hover:bg-gray-900 hover:text-white hover:shadow-2xl ">
              +
            </button>
          </div>
          <div>
            <button className="px-4 py-1 rounded-xl font-semibold text-sm bg-white hover:bg-gray-900 hover:text-white hover:shadow-2xl hover:-translate-y-1 transition">
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
