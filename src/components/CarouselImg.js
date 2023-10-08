import { CAROUSEL_IMG } from "../utils/constants";

const CarouselImg = (props) => {
  console.log(props);
  {
    return props?.list[1]?.card?.card?.imageGridCards?.info?.map((item) => (
      <div className="card">
        <div>
          <img src={CAROUSEL_IMG + item.imageId} alt="carousel-img" />
        </div>
        <div>
          <h3>{item.action.text}</h3>
        </div>
      </div>
    ));
  }
};

export default CarouselImg;
