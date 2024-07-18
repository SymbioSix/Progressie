import { Swiper, SwiperSlide } from 'swiper/react';
import dataCard from "../api/cardService";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Card = () => {
    return (
        <>
            <Swiper
                spaceBetween={350}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={false}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="ml-[20px] py-[50px]"
            >
                {
                    dataCard.map((data, index) => {
                        return (
                            <SwiperSlide key={index} className="ml-[10px]">
                            <div id="card-service" className="w-[530px] h-[430px] flex flex-col gap-2 p-5 rounded-xl bg-white shadow-[0_5px_3px_0px_rgba(0,0,0,1)]">
                                <h3 className="text-3xl font-bold">{data.nameService}</h3>
                                <p className="text-2xl font-bold">
                                    {data.description}
                                </p>
                            </div>
                        </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
}

export default Card;