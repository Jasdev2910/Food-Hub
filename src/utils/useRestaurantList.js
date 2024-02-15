import { useState, useEffect } from "react";
import { RES_LIST_API } from "../utils/constants";

const useRestaurantList = () => {
  const [listOfRes1, setListOfRes1] = useState([]);
  const [filteredRestaurant1, setFilteredRestaurant1] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RES_LIST_API);
      const json = await response.json();
      // console.log(json);
      setListOfRes1(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant1(json?.data?.cards);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  return filteredRestaurant1;
};

export default useRestaurantList;
