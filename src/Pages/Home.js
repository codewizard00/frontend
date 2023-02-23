import BookShow from "../BooksShow/BookeShow"
import ImageCarousel from "../Carousel/Carousel"
import EventGallery from "../EventGallery/EventGallery"
import Footer from "../Footer/Footer"
import NavBar from "../Home/Component/Header"
import HomeCarousel from "../HomeCarousel"
import Newsletter from "../Newsletter/Newsletter"
import Writer from "../Writer/Writer"

const Home=()=>{
    return (
        <>
            <NavBar/>
            <HomeCarousel/>
            <BookShow/>
            <Writer/>
            <EventGallery/>
            <ImageCarousel/>
            <Newsletter/>
            <Footer/>
        </>
    )
}

export default Home