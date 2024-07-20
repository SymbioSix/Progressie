import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactCardFlip from 'react-card-flip';
import dataCard from '../api/cardService';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Card = () => {
    const [isFlipped, setIsFlipped] = useState(Array(dataCard.length).fill(false));

    const handleFlip = (index) => {
        const newIsFlipped = [...isFlipped];
        newIsFlipped[index] = !newIsFlipped[index];
        setIsFlipped(newIsFlipped);
    };

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={50}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 350,
                },
            }}
            pagination={false}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="ml-0 sm:ml-[30px] pb-[50px]"
        >
            {dataCard.map((data, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center sm:block sm:items-start sm:justify-start">
                    <ReactCardFlip isFlipped={isFlipped[index]} flipDirection="horizontal">
                        <div
                            id="card-service"
                            className="w-[320px] h-[220px] sm:w-[320px] sm:h-[220px] md:w-[390px] md:h-[290px] lg:w-[420px] lg:h-[320px] xl:w-[470px] xl:h-[370px] 2xl:w-[530px] 2xl:h-[430px] sm:max-w-[530px] sm:max-h-[430px] flex flex-col gap-2 p-5 rounded-xl bg-white shadow-[0_5px_3px_0px_rgba(0,0,0,1)]"
                            style={{ backgroundImage: `url(${data.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            onClick={() => handleFlip(index)}
                        >
                            <h3 className="px-3 py-1 text-xl font-bold bg-white sm:text-base lg:py-2 lg:px-5 lg:text-3xl rounded-2xl w-fit">{data.nameService}</h3>
                        </div>
                        <div
                            id="card-service"
                            className="w-[320px] h-[220px] sm:w-[320px] sm:h-[220px] md:w-[390px] md:h-[290px] lg:w-[420px] lg:h-[320px] xl:w-[470px] xl:h-[370px] 2xl:w-[530px] 2xl:h-[430px] sm:max-w-[530px] sm:max-h-[430px] flex flex-col gap-2 p-5 rounded-xl bg-white shadow-[0_5px_3px_0px_rgba(0,0,0,1)]"
                            onClick={() => handleFlip(index)}
                        >   
                            <h3 className="py-2 text-3xl font-bold">{data.nameService}</h3>
                            <p className="text-xs font-bold text-black sm:text-2xl md:text-base lg:text-xl 2xl:text-2xl">{data.description}</p>
                        </div>
                    </ReactCardFlip>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Card;