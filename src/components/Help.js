import Accordian, { FaqAccordian } from "./Accordian";
import FaqData from "../utils/FaqData";

const Help = () => {
  const HelpAccordian = FaqAccordian();
  return (
    <div className="felx-col">
      <h1>Help & Support</h1>
      <h2>Let's take a step ahead & help you better</h2>
      <div>
        {FaqData.map((obj) => (
          <HelpAccordian data={obj} />
        ))}
      </div>
    </div>
  );
};

export default Help;
