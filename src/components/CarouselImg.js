import { CAROUSEL_IMG } from "../utils/constants";

const CarouselImg = (props) => {
  console.log(props);
  {
    return props?.list[1]?.card?.card?.imageGridCards?.info?.map((item) => (
      <div className="mx-6  min-w-[150px] box-border cursor-pointer">
        <div>
          <img
            className=""
            src={CAROUSEL_IMG + item.imageId}
            alt="carousel-img"
          />
        </div>
      </div>
    ));
  }
};

export default CarouselImg;
