import CarouselImg from "./CarouselImg";
import useRestaurantList from "../utils/useRestaurantList";

const Carousel = () => {
  const restaurantList = useRestaurantList();
  console.log(restaurantList);
  const box = document.querySelector(".container");

  const btnPressPrev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const btnPressNext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  return (
    <div>
      <div>
        <h2>{restaurantList[1]?.card?.card?.header?.title}</h2>
      </div>
      <div className="flex justify-between ">
        <button onClick={btnPressPrev} className="prevBtn">
          <p>-</p>
        </button>

        <div className="flex overflow-hidden overflow-x-hidden">
          <CarouselImg list={restaurantList} />
        </div>

        <button onClick={btnPressNext} className="nextBtn">
          <p>+</p>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
