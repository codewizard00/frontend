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
            url: `${process.env.REACT_APP_PROD_URL}get/AllBook`,
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

    var settings = {
        dots: false,
        infinite: true,
        speed: 700,
        autoplay:true,
        autoplaySpeed:1000,
        speed:1000,
        slidesToScroll: 1,
        responsive: [{ breakpoint: 200, settings: { slidesToShow: 2 } }, { breakpoint: 768, settings: { slidesToShow: 1 } }, { breakpoint: 1024, settings: { slidesToShow: 2 } }, { breakpoint: 10000, settings: { slidesToShow: 3 } }],
        centerMode: true
    };

    const slider = useRef(null);

    useEffect(() => {
        GetAllBook();
    }, [])

    return (
        <> 
        <div className="my-20">
        <h1 className="text-center text-4xl">Books</h1>
         <Slider ref={slider} {...settings}>
                {data && data.map((value, index) => (
                        <Link to={`/pdfReader/${value.id}`}>
                            <div class="book-card max-w-screen-sm">
                                <div class="content-wrapper md:flex">

                                    <img src={`${value.image}`} alt="" class="book-card-img" />

                                    <div class="card-content">
                                        <div class="book-name">{value.title}</div>
                                        <div class="book-by">{value.createdAt}</div>
                                        <div class="rate">
                                            <fieldset class="rating book-rate">
                                                <input type="checkbox" id="star-c1" name="rating" value="5" />
                                                <label class="full" for="star-c1"></label>
                                                <input type="checkbox" id="star-c2" name="rating" value="4" />
                                                <label class="full" for="star-c2"></label>
                                                <input type="checkbox" id="star-c3" name="rating" value="3" />
                                                <label class="full" for="star-c3"></label>
                                                <input type="checkbox" id="star-c4" name="rating" value="2" />
                                                <label class="full" for="star-c4"></label>
                                                <input type="checkbox" id="star-c5" name="rating" value="1" />
                                                <label class="full" for="star-c5"></label>
                                            </fieldset>
                                        </div>
                                        <div class="book-sum card-sum">{value.about}</div>
                                    </div>
                                </div>
                                <div class="likes">
                                    <div class="like-name"><span>Aadarsh Kumar</span> and<span> 2 other friends</span> like this</div>
                                </div>
                            </div>
                        </Link>
                ))}
            
            </Slider>
            </div>
        </>
    )
}

export default BookCarousel;