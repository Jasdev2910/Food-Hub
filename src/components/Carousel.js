import CarouselImg from "./CarouselImg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Carousel = ({ data, CAROUSEL_IMG, minWidth }) => {
  // console.log(props);
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
    <div className="flex justify-between pb-11 ">
      <button onClick={btnPressPrev} className="">
        <ArrowBackIosIcon />
      </button>
      <div
        className={`container scroll-smooth flex items-center overflow-x-scroll no-scrollbar`}
      >
        <CarouselImg
          data={data}
          CAROUSEL_IMG={CAROUSEL_IMG}
          minWidth={minWidth}
        />
      </div>

      <button onClick={btnPressNext} className="nextBtn">
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default Carousel;
