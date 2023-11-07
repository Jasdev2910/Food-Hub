import { useEffect, useState } from "react";
import { PIZZA_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import { Link } from "react-router-dom";
import Card, { withOfferLabel } from "./Card";
import Shimmer from "./Shimmer";

const Pizza = () => {
  const [list, setList] = useState([]);
  const { entityId } = useParams();
  // const restaurantData = useRestaurantList();
  const CardWithOffer = withOfferLabel(Card);

  console.log(entityId);

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      PIZZA_API +
        entityId +
        "&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await response.json();

    console.log(json);

    setList(json?.data?.cards);
  };

  return list?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-20 py-5 pt-24">
      <div className="m-10">
        <h1 className="text-4xl font-medium">{list[0]?.card?.card?.title}</h1>
        <h3 className="text-sm text-gray-500">
          {list[0]?.card?.card?.description}
        </h3>
      </div>
      <div className="grid grid-cols-4 px-4 ">
        {list?.slice(3)?.map((restaurant) => (
          <Link
            key={restaurant?.card?.card?.info?.id}
            to={"/restaurant/" + restaurant?.card?.card?.info?.id}
          >
            {restaurant?.card?.card?.info?.aggregatedDiscountInfoV3 ===
            undefined ? (
              <Card
                imageId={restaurant?.card?.card?.info?.cloudinaryImageId}
                name={restaurant?.card?.card?.info?.name}
                avgRating={restaurant?.card?.card?.info?.avgRating}
                cuisines={restaurant?.card?.card?.info?.cuisines}
                areaName={restaurant?.card?.card?.info?.areaName}
              />
            ) : (
              <CardWithOffer
                imageId={restaurant?.card?.card?.info?.cloudinaryImageId}
                name={restaurant?.card?.card?.info?.name}
                avgRating={restaurant?.card?.card?.info?.avgRating}
                cuisines={restaurant?.card?.card?.info?.cuisines}
                areaName={restaurant?.card?.card?.info?.areaName}
                labelHeader={
                  restaurant?.card?.card?.info?.aggregatedDiscountInfoV3?.header
                }
                labelSubHeader={
                  restaurant?.card?.card?.info?.aggregatedDiscountInfoV3
                    ?.subHeader
                }
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Pizza;
