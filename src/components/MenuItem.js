import { MENU_ITEM_IMG } from "../utils/constants";

const MenuItem = ({ menuItem, handleClick }) => {
  console.log(menuItem);
  const handleAddItem = (menuItem) => {
    handleClick(menuItem);
  };

  // console.log(menuItem);
  return (
    <div data-testid="foodItems" className="flex-col">
      <div className="flex justify-between my-6 px-3 py-3 ">
        <div className="resInfo-menu-item-card-deatils w-9/12">
          <h3 className="text-base font-medium">
            {menuItem?.card?.info?.name}
          </h3>
          <p className="text-base font-light">
            {"₹" +
              (menuItem?.card?.info?.price / 100 ||
                menuItem?.card?.info?.defaultPrice / 100)}
          </p>
          <p className="py-2 font-extralight text-sm text-gray-500 ">
            {menuItem?.card?.info?.description}
          </p>
        </div>
        <div className="relative w-3/12">
          <div>
            <img
              className="w-36 h-24 object-cover rounded-xl m-auto"
              src={MENU_ITEM_IMG + menuItem?.card?.info?.imageId}
              alt="img"
            ></img>
          </div>
          <button
            className="absolute w-16 h-8 top-[80px] left-[57px] rounded-lg bg-slate-100 hover:-translate-y-1 transition text-sm hover:outline hover:outline-lime-500 hover:bg-lime-100"
            onClick={() => handleAddItem(menuItem)}
          >
            Add+
          </button>
          {/* {cart.items.some(
            (item) => item.card?.info?.id === menuItem?.card?.info?.id
          ) && (
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
          )} */}
        </div>
      </div>
      <div className="my-3 max-w-3xl h-[0.5px] bg-slate-300 "></div>
    </div>
  );
};

export default MenuItem;
