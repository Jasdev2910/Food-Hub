// import { CAROUSEL_IMG } from "../utils/constants";

const CarouselImg = ({ data, CAROUSEL_IMG, minWidth }) => {
  // console.log(props);
  {
    return data?.card?.card?.imageGridCards?.info?.map((item) => (
      <div className={`mx-6  ${minWidth} box-border cursor-pointer`}>
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

// {props.list[0].card.card.["@type"] ===
// "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"}
