import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import appStore from "../utils/appStore";
import { clearCart, getCartTotal, removeItem } from "../utils/cartSlice";
import Food from "../assets/food.png";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import { useEffect } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart);
  const resName = cartItems?.resName;

  console.log(cartItems);
  const dispatch = useDispatch(appStore);

  useEffect(() => {
    dispatch(getCartTotal());
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClear = () => {
    dispatch(clearCart());
  };

  // console.log(cartItems);

  return (
    <div className="flex px-9 py-6 pt-24">
      <div className="flex-col w-6/12 m-6 p-4 bg-slate-200 rounded-xl">
        <div className="flex items-center justify-between   px-8">
          <h1 className="text-center text-2xl font-bold">Cart</h1>
          <h1 className="font-semibold">{resName}</h1>
          <button
            onClick={handleClear}
            className="px-4 py-1 rounded-xl font-semibold text-sm bg-gray-400 hover:bg-gray-900 hover:text-white hover:shadow-2xl hover:-translate-y-1 transition"
          >
            Clear
          </button>
        </div>
        <div className="my-3 max-w-3xl h-[0.5px] bg-slate-400 "></div>

        <div className="flex-col items-center justify-center mx-5 overflow-y-auto h-96 no-scrollbar">
          {cartItems?.items?.length === 0 && (
            <div className="">
              <h1 className=" mt-8 text-center font-bold text-3xl text-gray-400">
                Cart is Empty!
              </h1>
              <img
                className="w-[30%] m-auto pt-10 opacity-80"
                src={Food}
                alt="img"
              />
              <div className="text-center mt-8">
                <Link to="/">
                  <button className="px-4 py-2 rounded-xl font-semibold text-sm bg-gray-400  hover:bg-gray-900 hover:text-white hover:shadow-2xl hover:-translate-y-1 transition">
                    See Reataurants
                  </button>
                </Link>
              </div>
            </div>
          )}
          {cartItems?.items?.map((item) => (
            // <MenuItem menuItem={item} />
            <CartItems key={item?.card?.info?.id} menuItem={item} />
          ))}
        </div>
      </div>
      <div className="flex-col  w-6/12 m-6 p-4 bg-slate-200 rounded-xl">
        <h1 className="text-center text-2xl font-bold">SubTotal</h1>
        <div className="my-3 max-w-3xl h-[0.5px] bg-slate-400 "></div>

        <div className="p-4 w-1/2 mx-auto mt-24  flex bg-slate-300 flex-col items-center justify-center rounded-xl">
          <div className="py-8 px-4 w-full text-xl font-semibold">
            <div className="flex items-center justify-between">
              <h3>Total Quantity </h3>
              <span className="text-base">{cartItems.totalQuantity}</span>
            </div>
            <div className="flex items-center justify-between">
              <h3>Total Price </h3>
              <span className="text-base">₹{cartItems.totalPrice}</span>
            </div>
          </div>
          <div className=" m-auto w-2/3 px-4 py-2 rounded-xl text-center font-semibold text-sm bg-gray-400  hover:bg-gray-900 hover:text-white hover:shadow-2xl hover:-translate-y-1 transition">
            <button>Proceed to Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
