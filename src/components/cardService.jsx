import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import dataCard from "../api/cardService";

const Card = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: false, // Tidak ada jeda antara transisi
        disableOnInteraction: false,
      }}
      speed={5000} // Waktu transisi antar slide dalam milidetik (10 detik)
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
            className="w-full h-[130px] sm:h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[220px] flex flex-col gap-2 p-4 rounded-xl bg-white shadow-[0_5px_3px_0px_rgba(0,0,0,1)]"
            style={{
              backgroundImage: `url(${data.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex justify-center items-center h-full">
              <h3 className="px-3 py-1 text-white text-3xl font-bold sm:text-4xl lg:text-5xl bg-transparent rounded-2xl w-fit text-center">
                {data.nameService}
              </h3>
            </div>

            <p className="text-xs font-bold text-black sm:text-lg md:text-sm lg:text-base 2xl:text-lg">
              {data.description}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Card;
