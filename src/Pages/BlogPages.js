import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Home/Component/Header";
import axios from "axios";
import { Chip } from "@mui/material";
import Newsletter from "../Newsletter/Newsletter";


const BlogPages = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const getCompetionById = () => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}get/competition/${id}`,
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

    useEffect(() => {
        getCompetionById()
    }, [])

    return (
        <>
            <NavBar />
            <div class="bg-navy text-gray-200 md:text-center py-2 px-4">
                <Link to={`/competition/${data.id}`}>  परिणाम घोषित हो गए हैं चेक करने के लिए यहां क्लिक करें</Link>
            </div>
            <main class="mt-10">
               <div class="mb-4 md:mb-0 w-full max-w-screen-xl mx-auto " style={{ height: "24em" }}>
                    <div class="absolute left-0 bottom-0 w-full h-full z-10"
                        style={{ backgroundImage: "linear-gradient(180deg  transparent,rgba(0,0,0,.7))" }}></div>
                        <div className="flex justify-center">
                    <img src={`${data.image_url}`} class=" hidden md:flex margin-auto justify-center  object-cover aspect-auto " />
                    <img src={`${data.image_mobile_url}`} class=" block md:hidden object-cover aspect-video" />
                    </div>
                  
                    <div class="p-4 z-50">

                        <h2 class="text-4xl font-semibold text-gray-700 leading-tight">
                            {data.title}
                        </h2>
                        <div class="mt-3">
                            <div>
                                <p class="font-semibold text-gray-700 text-sm">{data.about} </p>
                                <p class="font-semibold text-gray-700 text-xs"> {data.timings} </p>
                            </div>
                            <div className="gap-1 my-2 flex">
                                {data?.keyword?.split(",")?.map((data1, index) => (
                                    <Chip color="success" label={data1} />
                                ))}

                            </div>
                        </div>
                    </div>
                </div>

                <div class="px-4 lg:px-0 mt-16 sm:mt-40 text-gray-700 max-w-screen-lg mx-auto text-lg leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: data.content }} />

                </div>
            </main>
            <Newsletter />
            <Footer />
        </>
    )
}

export default BlogPages;