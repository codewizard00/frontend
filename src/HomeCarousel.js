import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeCarousel = () => {
    return (
        <>
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
                <SwiperSlide>
                    <div>
                        <img style={{ width: "100%", minHeight: "300px" }} src="https://rekhta.pc.cdn.bitgravity.com/Images/Cms/Carousels/4f3f54d8-9fe2-4ef7-ba40-f8f7ef83f96b/3e240f11-c5bd-44af-b856-b2f1c43d3792.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img style={{ width: "100%", minHeight: "300px" }} src="https://rekhta.pc.cdn.bitgravity.com/Images/Cms/Carousels/b56d8d53-8191-40d2-be7d-2072e96e65dd/62f5a098-201d-4f0b-9de0-ca68b289d435.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img style={{ width: "100%", minHeight: "300px" }} src="https://rekhta.pc.cdn.bitgravity.com/Images/Cms/Carousels/4f3f54d8-9fe2-4ef7-ba40-f8f7ef83f96b/3e240f11-c5bd-44af-b856-b2f1c43d3792.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img style={{ width: "100%", minHeight: "300px" }} src="https://rekhta.pc.cdn.bitgravity.com/Images/Cms/Carousels/b56d8d53-8191-40d2-be7d-2072e96e65dd/62f5a098-201d-4f0b-9de0-ca68b289d435.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img style={{ width: "100%", minHeight: "300px" }} src="https://rekhta.pc.cdn.bitgravity.com/Images/Cms/Carousels/4f3f54d8-9fe2-4ef7-ba40-f8f7ef83f96b/3e240f11-c5bd-44af-b856-b2f1c43d3792.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img style={{ width: "100%", minHeight: "300px" }} src="https://rekhta.pc.cdn.bitgravity.com/Images/Cms/Carousels/4f3f54d8-9fe2-4ef7-ba40-f8f7ef83f96b/3e240f11-c5bd-44af-b856-b2f1c43d3792.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img style={{ width: "100%", minHeight: "300px" }} src="https://rekhta.pc.cdn.bitgravity.com/Images/Cms/Carousels/4f3f54d8-9fe2-4ef7-ba40-f8f7ef83f96b/3e240f11-c5bd-44af-b856-b2f1c43d3792.jpg" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default HomeCarousel;