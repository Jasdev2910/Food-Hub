// import { CAROUSEL_IMG } from "../utils/constants";

import { Link } from "react-router-dom";

const CarouselImg = ({ data, CAROUSEL_IMG, minWidth }) => {
  // console.log(props);
  {
    return data?.card?.card?.imageGridCards?.info?.map((item) =>
      item?.action?.link?.includes("menu") ? (
        <Link key={item?.entityId} to={"/restaurant/" + item?.entityId}>
          <div className={`md:mx-6  ${minWidth} box-border cursor-pointer`}>
            <div>
              <img
                className=""
                src={CAROUSEL_IMG + item?.imageId}
                alt="carousel-img"
              />
            </div>
          </div>
        </Link>
      ) : (
        <Link
          key={item?.entityId}
          to={
            "/CarouselItems/" +
            (item?.entityId?.startsWith("swiggy")
              ? item?.entityId?.slice(36)
              : item?.entityId)
          }
        >
          <div className={`mmd:x-6  ${minWidth} box-border cursor-pointer`}>
            <div>
              <img
                className=""
                src={CAROUSEL_IMG + item.imageId}
                alt="carousel-img"
              />
            </div>
          </div>
        </Link>
      )
    );
  }
};

export default CarouselImg;
