import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import UpArrow from "../assets/up-arrow.png";
import DownArrow from "../assets/down-arrow.png";

const Accordian = ({ data, showMenuItem, showIndex, setShowIndex }) => {
  // const [isActive, setISActive] = useState(false);
  // console.log(props?.menu?.card?.card?.itemCards);
  // console.log(props?.menu?.card?.card?.itemCards?.card?.info?.id);
  // console.log(showMenuItem);
  // console.log(showIndex);
  return (
    <div className="flex-col">
      <div
        className="max-w-3xl hover:bg-slate-5 0 hover:-translate-y-1 transition p-6  flex justify-between cursor-pointer shadow-lg"
        onClick={() => setShowIndex()}
      >
        <div className="font-bold">
          {data?.title}
          {" ("}
          {data?.itemCards?.length}
          {")"}
        </div>
        <div>
          {showMenuItem ? (
            <img className="w-8" src={UpArrow} alt="up" />
          ) : (
            <img className="w-8" src={DownArrow} alt="down" />
          )}
        </div>
      </div>
      {showMenuItem && (
        <div className="p-5 max-w-3xl bg-slate-50 rounded-b-xl">
          {data?.itemCards?.map((item, index) => (
            <MenuItem key={data?.itemCards?.card?.info?.id} menuItem={item} />
          ))}
        </div>
      )}
      {/* <div className="max-w-3xl h-[10px] bg-slate-200 "></div> */}
    </div>
  );
};

export const FaqAccordian = () => {
  return (props) => {
    const [isActive, setISActive] = useState(false);
    return (
      <div>
        <div
          className=" hover:bg-slate-100 p-5  flex justify-between items-center cursor-pointer"
          onClick={() => setISActive(!isActive)}
        >
          <div className="font-Montserrat font-medium">{props.data.title}</div>
          <div>
            {isActive ? (
              <img className="w-8" src={UpArrow} alt="up-arrow" />
            ) : (
              <img className="w-8" src={DownArrow} alt="down-arrow" />
            )}
          </div>
        </div>
        {isActive && (
          <div className="font-Montserrat  p-5 max-w-3xl bg-slate-50 rounded-b-xl">
            {props.data.description}
          </div>
        )}
        <div className="max-w-3xl h-[3px] bg-slate-200 "></div>
      </div>
    );
  };
};

export default Accordian;
