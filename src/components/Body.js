import Card, { withOfferLabel } from "./Card";
import search from "../assets/search.png";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import Carousel from "./Carousel";
import { CAROUSEL_IMG } from "../utils/constants";
import { WIDGET_CAROUSEL } from "../utils/constants";
import CarouselItems from "./CarouselItems";
import CarouselRes from "./CarouselRes";
import InfiniteScroll from "react-infinite-scroll-component";

const Body = () => {
  // const [listOfRes, setListOfRes] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState();
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const CardWithOffer = withOfferLabel(Card);
  const restaurantData = useRestaurantList(); // custom hook for list of restauranrt
  const restaurantList =
    restaurantData[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const restaurantList2 =
    restaurantData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  useEffect(() => {
    window.scrollTo(0, 0);
    setFilteredRestaurant(restaurantList);
  }, [restaurantList]);

  // const fetchData = () => {
  //   // const restaurantData = useRestaurantList();
  //   setTimeout(() => {
  //     setFilteredRestaurant(filteredRestaurant.concat(restaurantList));
  //   }, 1000);
  // };

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your Internet connection.
      </h1>
    );
  }

  return restaurantList?.length === undefined ? (
    <Shimmer />
  ) : (
    <div className="flex-col mx-24 pt-24 ">
      <div className="pt-6">
        <div className="text-2xl font-semibold ml-10">
          <h2>{restaurantData[0]?.card?.card?.header?.title}</h2>
        </div>
        <div>
          <Carousel
            data={restaurantData[0]}
            CAROUSEL_IMG={CAROUSEL_IMG}
            minWidth={`min-w-[150px]`}
          />
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold ml-10 pb-4">
          Best Offers for you
        </h2>
        <div>
          {/* <Carousel
            data={restaurantData[0]}
            CAROUSEL_IMG={WIDGET_CAROUSEL}
            minWidth="min-w-[150px]"
          /> */}
          <CarouselRes filteredRestaurant={restaurantList2} />
        </div>
      </div>
      <div className=" mx-auto">
        <div className="flex items-center">
          <div className="text-2xl font-semibold ml-10 pb-4">
            <h2>Restauraunts in Your Area</h2>
          </div>

          <div className="flex items-center justify-between p-5">
            <div className=" flex justify-between w-[100%] bg-gray-100 mx-40 rounded-full hover:shadow-xl hover:-translate-y-1 transition">
              <input
                className="w-full px-6 py-2 bg-transparent border-none outline-none"
                type="text"
                data-testid="searchInput"
                placeholder="Search Restauraunts"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <button
                className="w-7 mr-2 "
                type="search"
                aria-label="search"
                onClick={() => {
                  const filteredList = restaurantList?.filter((res) =>
                    res?.info?.name
                      ?.toLowerCase()
                      ?.includes(searchText?.toLowerCase())
                  );
                  console.log(filteredList);
                  setFilteredRestaurant(filteredList);
                }}
              >
                <img className="w-8" alt="search-icon" src={search} />
              </button>
            </div>
            <div>
              <button
                className="px-8 py-2 rounded-full bg-gray-100 hover:bg-gray-900 hover:text-white hover:shadow-2xl hover:-translate-y-1 transition"
                onClick={() => {
                  const newResList = filteredRestaurant?.filter(
                    (res) => res?.info?.avgRating > 4
                  );
                  console.log(newResList);
                  setFilteredRestaurant(newResList);
                }}
              >
                Filter
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 px-4 ">
          {filteredRestaurant?.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              // onClick={() => handleClick(restaurant)}
              to={"/restaurant/" + restaurant?.info?.id}
            >
              {restaurant?.info?.aggregatedDiscountInfoV3 === undefined ? (
                <Card
                  imageId={restaurant?.info?.cloudinaryImageId}
                  name={restaurant?.info?.name}
                  avgRating={restaurant?.info?.avgRating}
                  cuisines={restaurant?.info?.cuisines}
                  areaName={restaurant?.info?.areaName}
                />
              ) : (
                <CardWithOffer
                  imageId={restaurant?.info?.cloudinaryImageId}
                  name={restaurant?.info?.name}
                  avgRating={restaurant?.info?.avgRating}
                  cuisines={restaurant?.info?.cuisines}
                  areaName={restaurant?.info?.areaName}
                  labelHeader={
                    restaurant?.info?.aggregatedDiscountInfoV3?.header
                  }
                  labelSubHeader={
                    restaurant?.info?.aggregatedDiscountInfoV3?.subHeader
                  }
                />
              )}
            </Link>
          ))}
        </div>
        {/* {filteredRestaurant && (
          <InfiniteScroll
            dataLength={filteredRestaurant.length} //This is important field to render the next data
            next={fetchData}
            hasMore={true}
            loader={<Shimmer />}
          ></InfiniteScroll>
        )} */}
      </div>
    </div>
  );
};

export default Body;

// const fetchData = async () => {
//   const response = await fetch(RES_LIST_API);
//   const json = await response.json();
//   // console.log(json);
//   setListOfRes(
//     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//   );
//   setFilteredRestaurant(
//     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//   );
// };
