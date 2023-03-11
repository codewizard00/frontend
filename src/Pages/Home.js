import BookCarousel from "../BooksShow/BookCarousel"
import BookShow from "../BooksShow/BookeShow"
import ImageCarousel from "../Carousel/Carousel"
import EventGallery from "../EventGallery/EventGallery"
import Footer from "../Footer/Footer"
import HeroSection from "../HeroSections/HeroSection"
import NavBar from "../Home/Component/Header"
import HomeCarousel from "../HomeCarousel"
import CarouselCards from "../NewCarousel/NewCarousel"
import Newsletter from "../Newsletter/Newsletter"
import Writer from "../Writer/Writer"

const Home = () => {
    return (
        <>
            <NavBar />
            <HomeCarousel />
            <BookCarousel />
            <BookShow/>
            <Writer />
            <EventGallery />
            <CarouselCards />
            <HeroSection left={true} />
            <CarouselCards />
            <HeroSection left={false} />
            <CarouselCards />
            <Newsletter />
            <Footer />

        </>
    )
}

export default Home