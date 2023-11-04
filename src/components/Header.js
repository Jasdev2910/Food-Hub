import Logo from "../assets/logo.png";
import CartImg from "../assets/cart.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store?.cart?.items);
  // console.log(cartItems);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <nav className="flex justify-between items-center bg-white text-black shadow-lg">
      <div className="flex items-center text-2xl font-semibold">
        <Link className="w-20" to="/">
          <img className="mr-3" src={Logo} alt="logo"></img>
        </Link>
        <h1 className="text-orange-500 text-3xl font-semibold">
          Food <span className="text-green-500 text-xl font-semibold">HUB</span>
        </h1>
      </div>
      <div className="flex mx-6 text-black text-lg ">
        <ul className="flex p-6">
          <li className="px-6 m-2  cursor-pointer">
            <Link
              className="ml-1 flex items-center hover:text-orange-500"
              to="/offers"
            >
              <LocalOfferOutlinedIcon />
              Offers
            </Link>
          </li>
          {/* <button
            className="px-6 m-2 cursor-pointer"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button> */}
          <li className="px-6 m-2  cursor-pointer">
            <Link
              className="flex items-center hover:text-orange-500"
              to="/help"
            >
              <HelpOutlineOutlinedIcon />
              Help
            </Link>
          </li>
          <li className="px-6 m-2  cursor-pointer hover:text-orange-500">
            <Link className="flex items-center" to="/groceries">
              <ShoppingBagOutlinedIcon />
              Groceries
            </Link>
          </li>
          <li className="px-6 m-2 flex items-center cursor-pointer hover:text-orange-500">
            <AccountCircleOutlinedIcon />
            {loggedInUser}
          </li>
          <Link to="/cart">
            <div className="flex items-center">
              {/* <img
                className="w-8 m-2 cursor-pointer"
                alt="cart-logo"
                src={CartImg}
              /> */}
              <IconButton aria-label="cart">
                <StyledBadge
                  className="text-green-400"
                  badgeContent={cartItems?.length}
                  color="primary"
                >
                  <ShoppingCartIcon className=" m-1 text-black hover:text-orange-500" />
                </StyledBadge>
              </IconButton>
            </div>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
