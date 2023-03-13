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
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        slidesToScroll: 1,
        responsive: [{ breakpoint: 200, settings: { slidesToShow: 2 } }, { breakpoint: 768, settings: { slidesToShow: 1 } }, { breakpoint: 1024, settings: { slidesToShow: 2 } }, { breakpoint: 10000, settings: { slidesToShow: 2 } }],
        centerMode: true
    };

    const slider = useRef(null);

    useEffect(() => {
        GetAllBook();
    }, [])

    return (
        <>
            <div className="my-20 max-w-screen-xl w-[80%] md:w-full mx-auto">
                <h1 className="text-center text-2xl pb-10 font-[Hind] font-bold md:text-4xl">पुस्तकें</h1>
                <Slider ref={slider} {...settings} centerMode={false}>
                    {/* {data && data.map((value, index) => (
                        <Link to={`/pdfReader/${value.id}`}> */}
                            {/* <div class="book-card max-w-screen-sm">
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
                            </div> */}
                            <div class="">
                                <div
                                    class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
                                    <img
                                        class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                        src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                                        alt="" />
                                    <div class="flex flex-col justify-start p-6">
                                        <h5
                                            class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                            Card title
                                        </h5>
                                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                            This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </p>
                                        <p class="text-xs text-neutral-500 dark:text-neutral-300">
                                            Last updated 3 mins ago
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div
                                    class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
                                    <img
                                        class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                        src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                                        alt="" />
                                    <div class="flex flex-col justify-start p-6">
                                        <h5
                                            class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                            Card title
                                        </h5>
                                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                            This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </p>
                                        <p class="text-xs text-neutral-500 dark:text-neutral-300">
                                            Last updated 3 mins ago
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div
                                    class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
                                    <img
                                        class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                        src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                                        alt="" />
                                    <div class="flex flex-col justify-start p-6">
                                        <h5
                                            class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                            Card title
                                        </h5>
                                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                            This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </p>
                                        <p class="text-xs text-neutral-500 dark:text-neutral-300">
                                            Last updated 3 mins ago
                                        </p>
                                    </div>
                                </div>
                            </div>
                         
                        {/* </Link>
                    ))} */}

                </Slider>
            </div>
        </>
    )
}

export default BookCarousel;