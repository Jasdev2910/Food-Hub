import React from "react";
import { MENU_ITEM_IMG } from "../utils/constants";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../utils/cartSlice";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

const CartItems = ({ menuItem }) => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(removeItem(menuItem.card?.info.id));
  };

  return (
    <div className="flex p-4 w-full">
      <div className="">
        <img
          className="w-[130px] h-[100px] object-cover rounded-lg"
          alt="img"
          src={MENU_ITEM_IMG + menuItem?.card?.info?.imageId}
        />
      </div>
      <div className="w-full flex flex-col justify-between px-4">
        <div>
          <h3 className="text-lg font-semibold">
            {menuItem?.card?.info?.name}
          </h3>
          <p className="">
            {"₹" +
              (menuItem?.card?.info?.price / 100 ||
                menuItem?.card?.info?.defaultPrice / 100)}
          </p>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="pr-5 py-2">
            <button
              onClick={() =>
                dispatch(decreaseItemQuantity(menuItem?.card?.info?.id))
              }
              className="px-2 py-1 rounded-xl font-semibold text-sm bg-white hover:bg-gray-900 hover:text-white hover:shadow-2xl "
            >
              <RemoveOutlinedIcon fontSize="small" />
            </button>
            <span className="p-2">
              {menuItem?.card?.info?.inStock === 0
                ? deleteItem()
                : menuItem?.card?.info?.inStock}
            </span>
            <button className="px-2 py-1 rounded-xl font-semibold text-sm bg-white hover:bg-gray-900 hover:text-white hover:shadow-2xl ">
              <AddOutlinedIcon
                onClick={() =>
                  dispatch(increaseItemQuantity(menuItem?.card?.info?.id))
                }
                fontSize="small"
              />
            </button>
          </div>
          <div>
            <button
              onClick={deleteItem}
              className="px-2 py-1 rounded-lg font-semibold text-sm bg-white hover:bg-gray-900 hover:text-white hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <DeleteOutlineOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
