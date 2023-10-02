import Accordian, { FaqAccordian } from "./Accordian";
import FaqData from "../utils/FaqData";
import IllustrationWomen from "../assets/illustration-woman.png";

const Help = () => {
  const HelpAccordian = FaqAccordian();
  return (
    <div className="p-5 felx-col">
      <h1 className="px-5 pt-5 text-2xl font-Montserrat font-bold">
        Help & Support
      </h1>
      <h2 className="font-Montserrat px-5 text-sm text-gray-700">
        Let's take a step ahead & help you better
      </h2>
      <div className="flex justify-between items-center">
        <div className="p-10">
          <img src={IllustrationWomen} />
        </div>
        <div className="w-8/12">
          <div>
            <h1 className="font-Montserrat pl-2 py-1 text-2xl font-bold">
              FAQ
            </h1>
          </div>
          <div className="mt-3 max-w-3xl h-[0.5px] bg-slate-400 "></div>

          <div className="  mr-20 overflow-y-auto h-96 no-scrollbar">
            {FaqData.map((obj) => (
              <HelpAccordian data={obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
