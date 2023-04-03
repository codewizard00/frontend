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
        responsive: [{ breakpoint: 200, settings: { slidesToShow: 2 } }, { breakpoint: 470, settings: { slidesToShow: 2 } }, { breakpoint: 768, settings: { slidesToShow: 4 } }, { breakpoint: 1024, settings: { slidesToShow: 5 } }, { breakpoint: 10000, settings: { slidesToShow: 6 } }],
        centerMode: true
    };

    const slider = useRef(null);

    return (
        <div>
            <div className='py-10 bg-gray-100'>

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
                                <Link to={`bookpage/${item.id}`}>
                                    <img
                                        class="w-[300px] p-2 rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                        src={item.image}
                                        alt="" />
                                    <div className='flex justify-between px-6 w-full'>
                                        <div>
                                        <p >{item.title}</p>
                                        <p >{item.price}</p>
                                        </div>
                                        <div className='mr-2'>
                                            <button className='bg-navy text-white w-[60px] h-[30px] '>View</button>
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

