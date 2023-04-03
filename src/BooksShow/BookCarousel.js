import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./Book.scss"
import Slider from 'react-slick-slider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";



const BookCarousel = () => {
    const [data, setData] = useState([])
    const GetAllBook = () => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}get/AllBook/eBook`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                setData(response.data.message);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        slidesToScroll: 1,
        responsive: [{ breakpoint: 200, settings: { slidesToShow: 2 } }, { breakpoint: 470, settings: { slidesToShow: 2 } }, { breakpoint: 768, settings: { slidesToShow: 4 } }, { breakpoint: 1024, settings: { slidesToShow: 5 } }, { breakpoint: 10000, settings: { slidesToShow: 6 } }],
        centerMode: true
    };

    const slider = useRef(null);

    useEffect(() => {
        GetAllBook();
    }, [])

    return (
        <>
            <div className="my-20 max-w-screen-xl w-[100%] md:w-full mx-auto">
                <h1 className="text-center text-2xl pb-10 font-[Hind] font-bold md:text-4xl">ई-पुस्तकें</h1>
                <div className="max-w-screen-xl mx-auto">
                    <Slider ref={slider} {...settings} centerMode={false}>
                        {data.map((item, index) => (
                            <div class="container flex flex-wrap justify-center md:gap-20">
                                
                            <Link to={`/pdfReader/${item.id}`} target="_blank">  
                                <img
                                    class="w-[300px] p-2 rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                    src={item.image}
                                    alt="" />
                            </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default BookCarousel;