import React, { useEffect, useState } from 'react'
import Slider from 'react-slick-slider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
const CarouselCards = ({ name }) => {


    const [data, setData] = useState([]);
    const getAllCards = () => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}get/AllCompetion/${name}`,
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
        getAllCards();
    }, [])

    var settings = {
        className:"justify-start flex",
        dots: false,
        infinite: name !== "Upcoming-Competitions",
        speed: 700,
        // slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{ breakpoint: 200, settings: { slidesToShow: 2 } }, { breakpoint: 768, settings: { slidesToShow: 1 } }, { breakpoint: 1024, settings: { slidesToShow: 2 } }, { breakpoint: 10000, settings: { slidesToShow: 3 } }],
        // centerMode: true
    };



    const slider = React.useRef(null);

    return (
        <div className='carouselCards my-20 max-w-screen-xl mx-auto w-10/12 md:w-full'>
            <div className="header">
                <div className="flex">
                    <h1 className='text-3xl'>{name === 'Blog' && 'ब्लॉग'} {name === 'Competitions' && 'प्रतियोगिताएं'} {name === 'Upcoming-Competitions' && 'आगामी प्रतियोगिताएं'}</h1>
                </div>
                <div className="flex gap-2">
                    <div className="arrow__left border-2 border-gray-500 border-solid hover:text-gray-100 hover:bg-navy hover:border-navy  border-black p-1 rounded-full" onClick={() => slider?.current?.slickPrev()}>
                        <ArrowBackIcon className="arrow__leftIcon" />
                    </div>
                    <div className="arrow__right border-2 border-gray-500 border-solid hover:text-gray-100 hover:bg-navy hover:border-navy  border-black p-1 rounded-full" onClick={() => slider?.current?.slickNext()} >
                        <ArrowForwardIcon className="arrow__rightIcon" />
                    </div>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto'>
                <Slider ref={slider} centerMode={false} className={"justify-start flex"} {...settings} >
                    {data.map((item, index) => (
                      
                            <div class="max-w-sm overflow-hidden container flex flex-wrap justify-center rounded-lg bg-white hover:shadow-2xl">
                                <img
                                    src={item.image_url}
                                    class="aspect-video w-full object-cover"
                                    alt=""
                                />
                                <div class="p-4">
                                    <h3 class="text-xl font-medium text-gray-900">{item.title} <place> •{item.place}</place> • <time>{item.timings}</time></h3>
                                    <p class="mt-1 text-gray-500">{item.about}</p>
                                    <div class="mt-4 flex gap-2">
                                        {item.keyword.split(',').map((items, index) => (
                                            <span
                                                key={index}
                                                class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                                            >
                                                {items}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                     
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default CarouselCards