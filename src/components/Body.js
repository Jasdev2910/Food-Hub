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
    restaurantData.filteredRestaurant1[4]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants;
  const restaurantList2 =
    restaurantData?.filteredRestaurant1[1]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants;

  console.log(restaurantData);

  useEffect(() => {
    window.scrollTo(0, 0);
    setFilteredRestaurant(restaurantList);
  }, [restaurantList]);

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your Internet connection.
      </h1>
    );
  }

  return restaurantData.loading ? (
    <Shimmer />
  ) : (
    <div className="flex-col md:mx-24 mx-6 md:pt-24 pt-16">
      <div className="pt-6">
        <div className="md:text-2xl font-semibold md:ml-10">
          <h2>
            {restaurantData?.filteredRestaurant1[0]?.card?.card?.header?.title}
          </h2>
        </div>
        <div className="">
          <Carousel
            data={restaurantData?.filteredRestaurant1[0]}
            CAROUSEL_IMG={CAROUSEL_IMG}
            minWidth={`md:min-w-[150px] min-w-[70px]`}
          />
        </div>
      </div>
      <div>
        <h2 className="md:text-2xl font-semibold md:ml-10 md:pb-4">
          Best Offers for you
        </h2>
        <div className="py-2">
          {/* <Carousel
            data={restaurantData[0]}
            CAROUSEL_IMG={WIDGET_CAROUSEL}
            minWidth="min-w-[150px]"
          /> */}
          <CarouselRes filteredRestaurant={restaurantList2} />
        </div>
      </div>
      <div className="mx-auto">
        <div className="flex flex-col md:flex">
          <div className="md:text-2xl font-semibold md:ml-10 md:pb-4 pb-2">
            <h2>Restauraunts in Your Area</h2>
          </div>

          <div className="flex md:flex items-center justify-between md:p-5 mb-2 md:mb-0">
            <div className=" flex justify-between w-full bg-gray-100 md:mr-20 mr-4 rounded-full hover:shadow-xl hover:-translate-y-1 transition">
              <input
                className="md:w-2/5 w-[80%] md:px-6 px-2 md:py-2 py-1  bg-transparent border-none outline-none"
                type="text"
                data-testid="searchInput"
                placeholder="Search Restauraunts"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <button
                className="md:w-7 md:mr-2 "
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
                <img className="md:w-8 w-4" alt="search-icon" src={search} />
              </button>
            </div>
            <div>
              <button
                className="md:px-8 px-3 md:py-2 py-1  md:mr-6 rounded-full bg-gray-100 hover:bg-gray-900 hover:text-white hover:shadow-2xl hover:-translate-y-1 transition"
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

        <div className="grid grid-cols-2 md:grid-cols-4 md:px-4 ">
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
