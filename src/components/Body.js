import Card, { withOfferLabel } from "./Card";
import search from "../assets/search.png";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_LIST_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredrestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSerachText] = useState("");
  const onlineStatus = useOnlineStatus();
  const CardWithOffer = withOfferLabel(Card);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RES_LIST_API);
    const json = await response.json();
    console.log(json);
    setListOfRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your Internet connection.
      </h1>
    );
  }

  return listOfRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex-col ">
      <div className="flex items-center justify-between p-12">
        <div className="flex w-[100%] bg-gray-100 mx-40 rounded-full hover:shadow-xl hover:-translate-y-1 transition">
          <input
            className="w-[100%] px-6 py-4 bg-transparent border-none outline-none"
            type="text"
            placeholder="Search Restauraunts"
            value={searchText}
            onChange={(e) => {
              setSerachText(e.target.value);
            }}
          />
          <button
            className="w-14 "
            type="search"
            onClick={() => {
              const filteredList = listOfRes?.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText?.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            <img className="w-10" alt="search-icon" src={search} />
          </button>
        </div>
        <div>
          <button
            className="px-8 py-2 rounded-full bg-gray-100 hover:bg-gray-900 hover:text-white hover:shadow-2xl hover:-translate-y-1 transition"
            onClick={() => {
              const newResList = filteredrestaurant?.filter(
                (res) => res?.info?.avgRating > 4
              );
              setFilteredRestaurant(newResList);
            }}
          >
            Filter
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold ml-28 pb-4">
          Restauraunts in Your Area
        </h2>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap flex-row justify-between px-8 ">
          {filteredrestaurant?.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant?.info?.id}
            >
              {restaurant?.info?.aggregatedDiscountInfoV3 === undefined ? (
                <Card resData={restaurant} />
              ) : (
                <CardWithOffer resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
