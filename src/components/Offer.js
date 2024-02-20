import OfferCard from "./OfferCard";
import React from "react";
import { useEffect } from "react";
import Card, { withOfferLabel } from "./Card";
import { Link } from "react-router-dom";

import useRestaurantList from "../utils/useRestaurantList";
import Shimmer from "./Shimmer";

const Offer = () => {
  const CardWithOffer = withOfferLabel(Card);
  const restaurantData = useRestaurantList(); // custom hook for list of restauranrt
  const restaurantList =
    restaurantData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return restaurantList?.length === undefined ? (
    <Shimmer />
  ) : (
    <div className="flex-col mx-24 pt-28">
      <div className="text-2xl font-bold">
        <h1>Restaurant With Great Offer Near Me</h1>
      </div>
      <div className="flex flex-wrap flex-row justify-between px-4 py-5 ">
        {restaurantList?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            // onClick={() => handleClick(restaurant)}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            <CardWithOffer
              imageId={restaurant?.info?.cloudinaryImageId}
              name={restaurant?.info?.name}
              avgRating={restaurant?.info?.avgRating}
              cuisines={restaurant?.info?.cuisines}
              areaName={restaurant?.info?.areaName}
              labelHeader={restaurant?.info?.aggregatedDiscountInfoV3?.header}
              labelSubHeader={
                restaurant?.info?.aggregatedDiscountInfoV3?.subHeader
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Offer;
