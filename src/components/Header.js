import React, { useContext, useState } from "react";
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
import MenuIcon from "@mui/icons-material/Menu"; // Import MenuIcon for the mobile menu button
import Logo from "../assets/logo.png";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  const cartItems = useSelector((store) => store?.cart?.items);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <nav className="w-full flex justify-between items-center fixed z-40 bg-white text-black shadow-lg">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link className="flex items-center text-2xl font-semibold" to="/">
          {!isMobileMenuOpen && (
            <div className="flex items-center">
              <img className="mr-3 w-20 " src={Logo} alt="logo" />
              <h1 className=" md:block text-orange-500 text-3xl font-semibold">
                Food{" "}
                <span className="text-green-500 text-xl font-semibold">
                  HUB
                </span>
              </h1>
            </div>
          )}
        </Link>
        <div className="md:hidden">
          <IconButton
            className="md:hidden"
            aria-label="menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuIcon className="text-black" />
          </IconButton>
        </div>
      </div>
      <div
        className={`mx-6 text-lg ${
          isMobileMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <ul className="flex flex-col md:flex-row p-4 md:p-0">
          <li className="px-6 m-2  cursor-pointer">
            <Link
              className="ml-1 flex items-center hover:text-orange-500"
              to="/offers"
            >
              <LocalOfferOutlinedIcon />
              Offers
            </Link>
          </li>
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
              <IconButton className=" hover:text-orange-500" aria-label="cart">
                <StyledBadge
                  className="text-green-400 hover:text-orange-500"
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

// import Logo from "../assets/logo.png";
// import CartImg from "../assets/cart.png";
// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";
// import { IconButton } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import Badge from "@mui/material/Badge";
// import { styled } from "@mui/material/styles";
// import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

// const Header = () => {
//   const [btnName, setBtnName] = useState("Login");
//   const { loggedInUser } = useContext(UserContext);

//   const cartItems = useSelector((store) => store?.cart?.items);
//   // console.log(cartItems);

//   const StyledBadge = styled(Badge)(({ theme }) => ({
//     "& .MuiBadge-badge": {
//       right: -3,
//       top: 13,
//       border: `2px solid ${theme.palette.background.paper}`,
//       padding: "0 4px",
//     },
//   }));

//   return (
//     <nav className=" w-full flex justify-between items-center fixed z-40 bg-white text-black shadow-lg">
//       <div className="flex items-center text-2xl font-semibold">
//         <Link className="w-20" to="/">
//           <img className="mr-3" src={Logo} alt="logo"></img>
//         </Link>
//         <h1 className="text-orange-500 text-3xl font-semibold">
//           Food <span className="text-green-500 text-xl font-semibold">HUB</span>
//         </h1>
//       </div>
//       <div className="flex mx-6 text-black text-lg ">
//         <ul className="flex p-4">
//           <li className="px-6 m-2  cursor-pointer">
//             <Link
//               className="ml-1 flex items-center hover:text-orange-500"
//               to="/offers"
//             >
//               <LocalOfferOutlinedIcon />
//               Offers
//             </Link>
//           </li>
//           <li className="px-6 m-2  cursor-pointer">
//             <Link
//               className="flex items-center hover:text-orange-500"
//               to="/help"
//             >
//               <HelpOutlineOutlinedIcon />
//               Help
//             </Link>
//           </li>
//           <li className="px-6 m-2  cursor-pointer hover:text-orange-500">
//             <Link className="flex items-center" to="/groceries">
//               <ShoppingBagOutlinedIcon />
//               Groceries
//             </Link>
//           </li>
//           <li className="px-6 m-2 flex items-center cursor-pointer hover:text-orange-500">
//             <AccountCircleOutlinedIcon />
//             {loggedInUser}
//           </li>
//           <Link to="/cart">
//             <div className="flex items-center">
//               <IconButton className=" hover:text-orange-500" aria-label="cart">
//                 <StyledBadge
//                   className="text-green-400 hover:text-orange-500"
//                   badgeContent={cartItems?.length}
//                   color="primary"
//                 >
//                   <ShoppingCartIcon className=" m-1 text-black hover:text-orange-500" />
//                 </StyledBadge>
//               </IconButton>
//             </div>
//           </Link>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Header;
