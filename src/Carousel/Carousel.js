
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BlogCard from "../Card/BlogCard";
import axios from "axios";
import { useEffect, useState } from "react";

const ImageCarousel = () => {

    const [data,setData] = useState([]);

    const getAllCompetition = () => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}get/AllCompetion`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                setData(response.data.message)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(()=>{
        getAllCompetition();
    },[])

    return (
        <>
            <div className="flex mx-auto my-10">
                <div className="mx-auto w-11/12 max-w-screen-xl text-center">
                    <h1 className="text-4xl text-orange-500 my-6 font-bold font-[kalam]">कार्यक्रम</h1>
                    <Carousel
                        additionalTransfrom={0}
                        arrows={true}
                        autoPlay
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 3,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                    {data.map((value,index)=>(
                        <BlogCard value={value} key={index} />
                    ))}   
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default ImageCarousel;