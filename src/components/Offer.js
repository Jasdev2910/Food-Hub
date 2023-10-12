import OfferCard from "./OfferCard";
import React from "react";
import { useEffect } from "react";

const Offer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1>Offers Available</h1>
      <OfferCard offer={"Get 100 Cashback"} condition={"order above 400"} />
      <OfferCard offer={"Get 50% Discount"} condition={"order above 300"} />
    </div>
  );
};

export default Offer;
