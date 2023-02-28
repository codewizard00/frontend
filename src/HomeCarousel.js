import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import { useEffect, useState } from "react";


const HomeCarousel = () => {
    const [data, setData] = useState([]);
    const getAllBanner = () => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}/get/AllBanner`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                setData(response.data.message);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        getAllBanner();
    }, [])

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
                {data?.map((value, index) => (
                    <SwiperSlide>
                        <div>
                            <img style={{ width: "100%", minHeight: "300px" }} src={`${value.image_url}`} alt={`${value.image_alt}`}/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default HomeCarousel;