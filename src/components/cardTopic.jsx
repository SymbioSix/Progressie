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
    <div className="flex flex-wrap justify-between gap-10 md:gap-0 w-full h-auto md:h-[400px] lg:h-[500px] xl:h-[650px] pt-[40px] pb-[100px]">
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
                className="flex flex-col gap-2 p-3 lg:p-5 w-full h-[340px] md:h-[160px] lg:h-[260px] 2xl:h-[400px] rounded-xl bg-white shadow-[0_5px_3px_0px_rgba(0,0,0,1)]"
                style={{
                  backgroundImage: `url(${data.thumbnail})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                }}
                onClick={() => handleFlip(index)}
              >
                <h3 className="px-3 py-1 text-2xl font-bold bg-white sm:text-base lg:py-2 lg:px-5 lg:text-3xl rounded-2xl w-fit">
                  {data.nameService}
                </h3>
                {/* Cheat style :) */}
                <p className="text-xl font-bold text-transparent sm:text-2xl md:text-xs lg:text-base 2xl:text-2xl">
                  {data.description}
                </p>
              </div>

              {/* Tampak Belakang */}
              <div
                id="card-service"
                className="flex flex-col gap-2 p-5 sm:p-3 lg:p-5 w-full h-[340px] md:h-[160px] lg:h-[260px] 2xl:h-[400px] rounded-xl bg-white shadow-[0_5px_3px_0px_rgba(0,0,0,1)]"
                onClick={() => handleFlip(index)}
              >
                <p className="text-xl font-bold sm:text-2xl md:text-xs lg:text-base 2xl:text-2xl">
                  {data.description}
                </p>
              </div>
            </ReactCardFlip>
          </div>
        );
      })}
    </div>
  );
};

export default Card;