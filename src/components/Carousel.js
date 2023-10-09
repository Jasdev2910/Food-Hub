import CarouselImg from "./CarouselImg";
import useRestaurantList from "../utils/useRestaurantList";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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
    <div className="px-28 pb-11 ">
      <div className="text-2xl font-semibold">
        <h2>{restaurantList[1]?.card?.card?.header?.title}</h2>
      </div>
      <div className=" flex justify-between ">
        <button onClick={btnPressPrev} className="">
          <ArrowBackIosIcon />
        </button>

        <div className=" container scroll-smooth flex items-center overflow-hidden overflow-x-hidden">
          <CarouselImg list={restaurantList} />
        </div>

        <button onClick={btnPressNext} className="nextBtn">
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
