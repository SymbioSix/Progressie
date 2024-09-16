import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import dataCard from "../api/cardService";

const Card = () => {
  const handleCardClick = (link) => {
    window.location.href = link; 
  };

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: false, 
        disableOnInteraction: false,
      }}
      speed={5000} 
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      }}
      pagination={false}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="pb-[40px]"
    >
      {dataCard.map((data, index) => (
        <SwiperSlide
          key={index}
          className="flex items-center justify-center"
        >
          <div
            id="card-service"
            onClick={() => handleCardClick(data.link)} // Menggunakan data.link dari file js
            className="w-full h-[130px] sm:h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[220px] flex flex-col gap-2 p-4 rounded-xl bg-white shadow-[0_5px_3px_0px_rgba(0,0,0,1)] cursor-pointer transition-transform duration-300"
            style={{
              backgroundImage: `url(${data.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex justify-center items-center h-full">
              <h3 className="px-3 py-1 text-white text-3xl sm:text-4xl lg:text-5xl bg-transparent rounded-2xl w-fit text-center">
                {data.nameService}
              </h3>
            </div>

            <p className="text-xs font-bold text-white sm:text-lg md:text-sm lg:text-base 2xl:text-lg">
              {data.description}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Card;
