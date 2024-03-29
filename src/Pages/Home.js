import axios from "axios"
import { useEffect, useState } from "react"
import BookCarousel from "../BooksShow/BookCarousel"
import BookShow from "../BooksShow/BookeShow"
import EventGallery from "../EventGallery/EventGallery"
import Footer from "../Footer/Footer"
import HeroSection from "../HeroSections/HeroSection"
import NavBar from "../Home/Component/Header"
import HomeCarousel from "../HomeCarousel"
import CarouselCards from "../NewCarousel/NewCarousel"
import Newsletter from "../Newsletter/Newsletter"
import Writer from "../Writer/Writer"

const Home = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const getAllBanner = () => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}get/AllBanner/Home-Carousel`,
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
        setLoader(false)
    }, [])

    console.log(loader)

    useEffect(() => {
        getAllBanner();
    }, [])

    return (
        <>
            {loader ?
                <div className="h-[100vh] flex bg-[#fafaff] justify-center items-center">
                    <img src="https://res.cloudinary.com/valarmorghullis/image/upload/v1680548687/WhatsApp_Image_2023-04-04_at_00.33.54_i2uo3n.jpg" />
                </div>
                :
                <>
                    <NavBar />
                    <HomeCarousel data={data} />
                    <BookCarousel />
                    <BookShow />
                    <EventGallery />
                    <Writer />
                    <CarouselCards name={"Blog"} />
                    <HeroSection left={true} />
                    <CarouselCards name={"Competitions"} />
                    <CarouselCards name={"Upcoming-Competitions"} />
                    <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
                        <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                            <div class="max-w-2xl mx-auto text-center">
                                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Numbers tell our story</h2>
                                <p class="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                            </div>

                            <div class="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                                <div>
                                    <h3 class="font-bold text-7xl">
                                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 6+ </span>
                                    </h3>
                                    <p class="mt-4 text-xl font-medium text-gray-900">Years in business</p>
                                    <p class="text-base mt-0.5 text-gray-500">Creating the successful path</p>
                                </div>

                                <div>
                                    <h3 class="font-bold text-7xl">
                                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 4821 </span>
                                    </h3>
                                    <p class="mt-4 text-xl font-medium text-gray-900">Projects delivered</p>
                                    <p class="text-base mt-0.5 text-gray-500">In last 6 years</p>
                                </div>

                                <div>
                                    <h3 class="font-bold text-7xl">
                                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 37+ </span>
                                    </h3>
                                    <p class="mt-4 text-xl font-medium text-gray-900">Team members</p>
                                    <p class="text-base mt-0.5 text-gray-500">Working for your success</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Newsletter />
                    <Footer />
                </>
            }

        </>
    )
}

export default Home