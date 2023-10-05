import Logo from "../assets/logo.png";
import CartImg from "../assets/cart.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store?.cart?.items);
  // console.log(cartItems);

  return (
    <nav className="flex justify-between items-center bg-slate-900">
      <div className="flex items-center text-2xl font-semibold">
        <Link to="/">
          <img className="w-20 mr-3" src={Logo} alt="logo"></img>
        </Link>
        <h1 className="text-white">Food Hub</h1>
      </div>
      <div className="flex mx-6 text-white text-lg">
        <ul className="flex p-6">
          <li className="px-6 m-2 cursor-pointer">
            <Link to="/offers">Offers</Link>
          </li>
          <button
            className="px-6 m-2 cursor-pointer"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-6 m-2 cursor-pointer">
            <Link to="/help">Help</Link>
          </li>
          <li className="px-6 m-2 cursor-pointer">
            <Link to="/groceries">Groceries</Link>
          </li>
          <li className="px-6 m-2 cursor-pointer">{loggedInUser}</li>
          <Link to="/cart">
            <div className="flex items-center">
              <img
                className="w-8 m-2 cursor-pointer"
                alt="cart-logo"
                src={CartImg}
              />
              <span>( {cartItems?.length} )</span>
            </div>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
