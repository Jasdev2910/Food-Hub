import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="md:mt-10 mt-4 md:p-10 w-[100%] h-[190px] bg-slate-300 ">
      <div className="flex md:justify-evenly items-center list-none text-gray-500">
        <div className="md:flex mx-3 text-center">
          <img className="w-24 md:w-32" src={Logo} alt="logo" />
          <h1 className="md:py-8">
            copyright © <br />
            {date}
          </h1>
        </div>
        <div>
          <h1 className="text-lg font-bold ">Company</h1>
          <li className="hover:text-gray-700">About</li>
          <li className="hover:text-gray-700">Team</li>
          <Link to="/offers">
            <li className="hover:text-gray-700">Offers</li>
          </Link>
        </div>
        <div className="mx-5 md:mx-0">
          <h1 className="text-lg font-bold ">Contact Us</h1>
          <Link to="/help">
            {" "}
            <li className="hover:text-gray-700">Help & Support</li>
          </Link>
          <li className="hover:text-gray-700">Partner with us</li>
          <li className="hover:text-gray-700">Ride with us</li>
        </div>
        <div className="hidden md:visible md:flex md:flex-col">
          <h1 className="text-lg font-bold ">Legal</h1>
          <li className="hover:text-gray-700">Terms & Condition</li>
          <li className="hover:text-gray-700">Cookie Policy</li>
          <li className="hover:text-gray-700">Privacy Policy</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
