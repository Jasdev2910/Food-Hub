import { CDN } from "../utils/constants";
import StarsIcon from "@mui/icons-material/Stars";

const Card = (props) => {
  // const { resData } = props;
  // const { name, avgRating, cuisines, areaName } = resData?.info;
  // console.log(resData);

  return (
    <div
      data-testid="resCard"
      className="flex-col w-[150px] md:w-[230px] md:m-3 md:px-2 px-2 md:py-2 py-2 rounded-2xl cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition"
    >
      <div className="bg-gradient-to-t from-black from-99.9%% md:rounded-3xl rounded-xl opacity-95">
        <img
          className="w-[135px] h-[70px] md:w-[240px] md:h-[170px] rounded-lg md:rounded-3xl mix-blend-overlay saturate-150"
          alt="img"
          src={CDN + props?.imageId}
        />
      </div>
      <div className="md:py-2">
        <h2 className="text-left font-semibold text-xs md:text-xl line-clamp-1">
          {props?.name}
        </h2>
        <h3 className="text-left md:text-base text-xs font-normal">
          <StarsIcon fontSize="small" className="text-green-600 mr-1 medium" />
          {props?.avgRating}/5
        </h3>
        <h4 className="text-left md:text-base text-xs line-clamp-1">
          {props?.cuisines?.join(", ")}
        </h4>
        <h4 className="text-left md:text-base text-xs overflow-hidden ">
          {props?.areaName}
        </h4>
      </div>
    </div>
  );
};

export const withOfferLabel = (Card) => {
  return (props) => {
    return (
      <div>
        <div className="md:relative text-center w-full md:visible hidden">
          <h1 className="w-20 md:w-44 absolute md:font-extrabold text-black md:top-[142px] md:left-[42px] z-10 drop-shadow-2xl">
            {props?.labelHeader + props?.labelSubHeader}
          </h1>
        </div>

        <Card {...props} />
      </div>
    );
  };
};

export default Card;
