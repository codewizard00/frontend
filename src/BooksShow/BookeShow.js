import '../Home/Home.scss'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import "./Book.scss"
import Slider from 'react-slick-slider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const BookShow = () => {


    const [data, setData] = useState([])

    const GetAllBook = () => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}get/AllBook/Book`,
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
        GetAllBook();
    }, [])

    

    var settings = {
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        slidesToScroll: 1,
        responsive: [{ breakpoint: 200, settings: { slidesToShow: 2 } }, { breakpoint: 470, settings: { slidesToShow: 2 } }, { breakpoint: 768, settings: { slidesToShow: 4 } }, { breakpoint: 1024, settings: { slidesToShow: 4 } }, { breakpoint: 10000, settings: { slidesToShow: 4 } }],
        // centerMode: true
    };

    const slider = useRef(null);

    return (
        <div className='bg-gray-100 '>
            <div className='py-10 w-[92%] mx-auto'>

                <div className="max-w-screen-xl flex justify-between mx-auto">
                    <div className="flex">
                        <h1 className='text-3xl my-4'>पुस्तकें</h1>
                    </div>
                    <div className="flex gap-2">
                        <div className="arrow__left border-2 border-gray-500 border-solid hover:text-gray-100 hover:bg-navy hover:border-navy  border-black h-10 w-10 mx-auto my-auto flex items-center justify-center rounded-full" onClick={() => slider?.current?.slickPrev()}>
                            <ArrowBackIcon className="arrow__leftIcon" />
                        </div>
                        <div className="arrow__right border-2 border-gray-500 border-solid hover:text-gray-100 hover:bg-navy hover:border-navy  border-black p-1 rounded-full h-10 w-10 mx-auto my-auto flex items-center justify-center" onClick={() => slider?.current?.slickNext()} >
                            <ArrowForwardIcon className="arrow__rightIcon" />
                        </div>
                    </div>
                </div>
                <div className='max-w-screen-xl mx-auto'>
                    <Slider ref={slider} {...settings} centerMode={false}>
                        {data && data.map((item, index) => (
                            <div class="container flex flex-wrap justify-center md:gap-20">
                                <Link to={`bookpage/${item.id}`} className="flex justify-center flex-col">
                                    <img
                                        class="w-[200px] p-2 object-cover md:h-auto md:w-60 rounded-[20px]"
                                        src={item.image}
                                        alt="" />
                                    <div className='flex justify-between px-6 w-full'>
                                        <div className='text-[#000] font-bold'>
                                            <p className='text-[20px] md:text-[26px]'>{item.title}</p>
                                            <p >{item.price}</p>
                                        </div>
                                       
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default BookShow;

