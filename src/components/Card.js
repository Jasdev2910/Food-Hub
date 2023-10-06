import { CDN } from "../utils/constants";
import StarsIcon from "@mui/icons-material/Stars";

const Card = (props) => {
  const { resData } = props;
  // const { name, avgRating, cuisines, areaName } = resData?.info;
  // console.log(resData);

  return (
    <div
      data-testid="resCard"
      className="flex-col w-[240px] h-72 m-3 px-3 rounded-2xl cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition"
    >
      <div className="bg-gradient-to-t from-black from-99.9%% rounded-3xl opacity-95">
        <img
          className="w-[240px] h-[170px] rounded-3xl mix-blend-overlay saturate-150"
          alt="img"
          src={CDN + resData?.info?.cloudinaryImageId}
        />
      </div>
      <div className="py-2">
        <h2 className="text-left font-semibold text-xl line-clamp-1">
          {resData?.info?.name}
        </h2>
        <h3 className="text-left font-normal ">
          <StarsIcon className="text-green-600 mr-1 medium" />
          {resData?.info?.avgRating}/5
        </h3>
        <h4 className="text-left line-clamp-1">
          {resData?.info?.cuisines.join(", ")}
        </h4>
        <h4 className="text-left overflow-hidden ">
          {resData?.info?.areaName}
        </h4>
      </div>
    </div>
  );
};

export const withOfferLabel = (Card) => {
  return (props) => {
    return (
      <div>
        <div className="relative text-center">
          <h1 className="w-44 absolute font-extrabold text-white top-[142px] left-[45px] z-10 drop-shadow-2xl">
            {props?.resData?.info?.aggregatedDiscountInfoV3?.header +
              props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader}
          </h1>
        </div>

        <Card {...props} />
      </div>
    );
  };
};

export default Card;
