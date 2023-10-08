import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

/**
 *
 * @param {*} resId
 * @returns
 */
const useRestauranrMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestauranrMenu;
