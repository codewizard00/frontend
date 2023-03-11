import Footer from "../Footer/Footer";
import NavBar from "../Home/Component/Header";
import HomeCarousel from "../HomeCarousel"
import Newsletter from "../Newsletter/Newsletter";

const Gallery = () => {
    return (
        <>
        <NavBar/>
            <HomeCarousel />
            <div className="flex justify-between max-w-screen-xl mx-auto items-center">

                <h1 className="text-5xl my-10 font-[hind] text-navy font-bold text-center" >
                    आने वाले कार्यक्रम
                </h1>
            </div>
            <section class="overflow-hidden gap-4 max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 text-gray-700">
                <div className="relative group">
                    <img class="h-auto max-w-sm transition-all duration-1000 blur-none rounded-lg group-hover:blur-sm " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                    <div class="group-hover:text-4xl text-[0px] transition-all duration-1000 absolute z-10 translate-x-[-50%] left-[50%] flex justify-center items-center  text-gray-100 bottom-[10%] font-semibold">Dwayne</div>
                </div>
                <div className="relative group">
                    <img class="h-auto max-w-sm transition-all duration-1000 blur-none rounded-lg group-hover:blur-sm " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                    <div class="group-hover:text-6xl text-[0px] transition-all duration-1000 absolute z-10 flex justify-center items-center  text-gray-100 bottom-0 font-semibold">Dwayne</div>
                </div>
                <div className="relative group">
                    <img class="h-auto max-w-sm transition-all duration-1000 blur-none rounded-lg group-hover:blur-sm " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                    <div class="group-hover:text-6xl text-[0px] transition-all duration-1000 absolute z-10 flex justify-center items-center  text-gray-100 bottom-0 font-semibold">Dwayne</div>
                </div>
                <div className="relative group">
                    <img class="h-auto max-w-sm transition-all duration-1000 blur-none rounded-lg group-hover:blur-sm " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                    <div class="group-hover:text-4xl text-[0px] transition-all duration-1000 absolute z-10 translate-x-[-50%] left-[50%] flex justify-center items-center  text-gray-100 bottom-[10%] font-semibold">Dwayne</div>
                </div>
                <div className="relative group">
                    <img class="h-auto max-w-sm transition-all duration-1000 blur-none rounded-lg group-hover:blur-sm " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                    <div class="group-hover:text-6xl text-[0px] transition-all duration-1000 absolute z-10 flex justify-center items-center  text-gray-100 bottom-0 font-semibold">Dwayne</div>
                </div>
                <div className="relative group">
                    <img class="h-auto max-w-sm transition-all duration-1000 blur-none rounded-lg group-hover:blur-sm " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                    <div class="group-hover:text-6xl text-[0px] transition-all duration-1000 absolute z-10 flex justify-center items-center  text-gray-100 bottom-0 font-semibold">Dwayne</div>
                </div>
            </section>
            <Newsletter/>
            <Footer/>
        </>
    )
}


export default Gallery;