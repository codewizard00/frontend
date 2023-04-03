import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


const HomeCarousel = ({ data }) => {
    
    return (
        <>
            <div className="hidden sm:block">
                <Swiper spaceBetween={30}
                    effect={"fade"}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    className="mySwiper">
                    {data?.map((value, index) => (
                        <SwiperSlide>
                            <div>
                                <img  src={`${value.image_url}`} alt={`${value.image_alt}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="block sm:hidden">
                <Swiper spaceBetween={30}
                    effect={"fade"}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    className="mySwiper">
                    {data?.map((value, index) => (
                        <SwiperSlide>
                            <div>
                                <img src={`${value.image_mobile_url}`} alt={`${value.image_alt}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default HomeCarousel;