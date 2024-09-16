import { useState } from "react";
import ReactCardFlip from "react-card-flip";

import dataCard from "../api/cardTopic";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(
    Array(dataCard.length).fill(false)
  );

  const handleFlip = (index) => {
    const newIsFlipped = [...isFlipped];
    newIsFlipped[index] = !newIsFlipped[index];
    setIsFlipped(newIsFlipped);
  };

  return (
    <div className="flex flex-wrap justify-center gap-5 w-full h-auto md:h-[300px] lg:h-[400px] xl:h-[500px] pt-[40px] pb-[100px]">
      {dataCard.map((data, index) => {
        const alignmentClass =
          index === 0 || index === 2 ? "items-end" : "items-start";
        return (
          <div
            key={index}
            className={`w-fit md:max-w-[220px] lg:max-w-[320px] 2xl:max-w-[460px] flex cursor-pointer ${alignmentClass}`}
          >
            <ReactCardFlip
              isFlipped={isFlipped[index]}
              flipDirection="horizontal"
            >
              {/* Tampak Depan */}
              <div
  id="card-service"
  className="flex flex-col gap-2 p-3 lg:p-5 w-full h-[280px] md:h-[140px] lg:h-[200px] 2xl:h-[300px] rounded-xl bg-white shadow-[0_5px_3px_0px_rgba(0,0,0,1)]"
  style={{
    backgroundImage: `url(${data.thumbnail})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  }}
  onClick={() => handleFlip(index)}
>
  <h3 className="px-3 py-1 text-sm font-bold text-white sm:text-xs lg:py-2 lg:px-5 lg:text-base rounded-2xl w-fit">
    {data.nameService}
  </h3>
  <p className="text-xs font-bold text-transparent sm:text-xs md:text-[10px] lg:text-[11px] 2xl:text-sm">
    {data.description}
  </p>
</div>

{/* Tampak Belakang */}
<div
  id="card-service"
  className="flex flex-col gap-2 p-5 sm:p-3 lg:p-5 w-full h-[280px] md:h-[140px] lg:h-[200px] 2xl:h-[300px] rounded-xl bg-white shadow-[0_5px_3px_0px_rgba(0,0,0,1)]"
  onClick={() => handleFlip(index)}
>
  <div className="overflow-y-auto max-h-[150px]">
    <p className="text-[15px] font-bold sm:text-[15px] md:text-[15px] lg:text-[15px] 2xl:text-[15px]">
      {data.description}
    </p>
  </div>
</div>

            </ReactCardFlip>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
