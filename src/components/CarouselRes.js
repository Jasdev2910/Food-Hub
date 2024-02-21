import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import Card, { withOfferLabel } from "./Card";

const CarouselRes = ({ filteredRestaurant }) => {
  console.log(filteredRestaurant);
  const CardWithOffer = withOfferLabel(Card);
  const box = document.querySelector(".container");

  const btnPressPrev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const btnPressNext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };
  return (
    <div>
      {/* <button onClick={btnPressPrev} className="">
        <ArrowBackIosIcon />
      </button>
      <button onClick={btnPressNext} className="nextBtn">
        <ArrowForwardIosIcon />
      </button> */}
      <div
        className={`container scroll-smooth flex items-center overflow-y-scroll no-scrollbar`}
      >
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
                labelHeader={restaurant?.info?.aggregatedDiscountInfoV3?.header}
                labelSubHeader={
                  restaurant?.info?.aggregatedDiscountInfoV3?.subHeader
                }
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CarouselRes;
