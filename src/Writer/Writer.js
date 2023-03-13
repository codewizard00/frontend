import React, { useEffect, useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Waypoint } from 'react-waypoint';
/* Install pure-react-carousel using -> npm i pure-react-carousel */
import ReactPlayer from 'react-player'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function Writer() {
    let [shouldPlay, updatePlayState] = useState(false);

    let handleEnterViewport = function () {
        console.log("Dsa")
        updatePlayState(true);
    };
    let handleExitViewport = function () {
        console.log("Dsa")
        updatePlayState(false);
    };
    return (
        <div>
            <div className="mt-20 bg-gray-100">
                <div className="flex items-center justify-between h-full md:h-[70vh]  w-full absolute z-0">
                    <div className="w-1/3 h-full" />
                    <div className="w-4/6 ml-16 h-full" />
                </div>
                <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
                    <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} infinite={true} totalSlides={2}>
                        <h1 className="text-2xl text-navy md:text-4xl font-[Hind] font-bold xl:block hidden leading-tight text-gray-800">
                            आज का रचनाकार
                        </h1>
                        <h1 className="text-2xl md:text-4xl text-navy font-[Hind] font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">आज का रचनाकार</h1>
                        <Slider isPlaying={false} infinite={true}>
                        <Slide index={0} tabIndex="null">
                                <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                                    <div className="mt-14 md:flex">
                                        <div className="relative lg:w-1/2 sm:w-96 md:h-80 xl:h-96">
                                            <img src="https://i.ibb.co/4g1D9cv/imgslider1.png" alt="image of profile" className="w-40 md:w-full md:h-full md:rounded m-auto rounded-full h-40 flex-shrink-0 object-fit object-cover shadow-lg " />
                                            <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                            </div>
                                        </div>
                                        <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                            <div>
                                                <h1 className="text-2xl font-navy text-center md:text-left font-semibold xl:leading-loose text-gray-800">Name</h1>
                                                <p className="text-base text-center md:text-left  font-medium leading-6 mt-4 text-gray-600">Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.</p>
                                            </div>
                                         
                                        </div>
                                    </div>
                                </div>
                            </Slide> 
                             <Slide index={1} tabIndex="null">
                                <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                                    <div className="mt-14 md:flex">
                                        <div className="relative lg:w-1/2 sm:w-96 md:h-80 xl:h-96">
                                            <img src="https://i.ibb.co/4g1D9cv/imgslider1.png" alt="image of profile" className="w-40 md:w-full md:h-full md:rounded m-auto rounded-full h-40 flex-shrink-0 object-fit object-cover shadow-lg " />
                                            <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                            </div>
                                        </div>
                                        <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                            <div>
                                                <h1 className="text-2xl font-navy text-center md:text-left font-semibold xl:leading-loose text-gray-800">Name</h1>
                                                <p className="text-base text-center md:text-left  font-medium leading-6 mt-4 text-gray-600">Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.</p>
                                            </div>
                                         
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </Slider>
                        <div className="flex items-center justify-center gap-2 mt-8">
                            <ButtonBack className="cursor-pointer border-2 border-black border-solid hover:text-gray-100 hover:bg-navy hover:border-navy  border-black p-1 rounded-full" role="button" aria-label="previous slide">
                                <ArrowBackIcon />
                            </ButtonBack>

                            <ButtonNext role="button" aria-label="next slide" className="cursor-pointer hover:text-gray-100 hover:bg-navy hover:border-navy border-2 border-black border-solid  border-black p-1 rounded-full">
                                <ArrowForwardIcon />
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
        </div>
    );
}
