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
        responsive: [{ breakpoint: 200, settings: { slidesToShow: 1 } }, { breakpoint: 768, settings: { slidesToShow: 1 } }, { breakpoint: 1024, settings: { slidesToShow: 2 } }, { breakpoint: 10000, settings: { slidesToShow: 3 } }],

    };

    const slider = useRef(null);

    return (
        <div>
            <div className='my-10 bg-gray-100'>

                <div className="max-w-screen-xl flex justify-between mx-auto">
                    <div className="flex">
                        <h1 className='text-3xl my-10'>पुस्तकें</h1>
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
                            <Link to={`bookpage/${item.id}`}>
                            <div class="container flex flex-wrap justify-center md:gap-20">
                                <div class="mobile-layout">
                                    <div class="book-cover">
                                        <img class="book-top" src={`${item.image}`} alt="book-top" />
                                        <img class="book-side" src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg" alt="book-side" />
                                    </div>
                                    <div class="preface">
                                        <div class="content">
                                            <div class="header">
                                                <div class="title">{item.title}</div>
                                                <div class="icon">
                                                    <i class="fas fa-chevron-down"></i>
                                                </div>
                                            </div>
                                            <div class="author">द्वारा {item.writer}</div>
                                            <div class="body">
                                              <p>
                                                {item.about}
                                              </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default BookShow;

