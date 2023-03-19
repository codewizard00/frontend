import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Home/Component/Header";
import HomeCarousel from "../HomeCarousel"
import Newsletter from "../Newsletter/Newsletter";

const Gallery = () => {

    const [data1, setData1] = useState([]);
    const getAllBanner1 = () => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}get/AllBanner/Event-Gallery`,
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

    const [data, setData] = useState([]);
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
        getAllBanner1();
        getAllBanner();
    }, [])

  

    return (
        <>
            <NavBar />
            <HomeCarousel  data={data1}/>
            <div className="flex justify-between max-w-screen-xl mx-auto items-center">

                <h1 className="text-5xl my-10 font-[hind] text-navy font-bold text-center" >
                    गेलरी
                </h1>
            </div>
            <section class="overflow-hidden gap-4 max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 text-gray-700">
                {data.map((data,index) => (
                    <div key={index} className="relative group">
                        <img class="h-auto max-w-sm transition-all duration-1000 blur-none rounded-lg group-hover:blur-sm " src={data.image_url} alt="image description" />
                        <div class="group-hover:text-4xl text-[0px] transition-all duration-1000 absolute z-10 translate-x-[-50%] left-[50%] flex justify-center items-center  text-gray-100 bottom-[10%] font-semibold">Dwayne</div>
                    </div>
                ))}
              
            </section>
            <Newsletter />
            <Footer />
        </>
    )
}


export default Gallery;