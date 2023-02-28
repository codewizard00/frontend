import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
            url: `http://localhost:8080/get/competition/${id}`,
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
            <main class="mt-10">
                <div class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ height: "24em" }}>
                    <div class="absolute left-0 bottom-0 w-full h-full z-10"
                        style={{ backgroundImage: "linear-gradient(180deg  transparent,rgba(0,0,0,.7))" }}></div>
                    <img src={`${data.image_url}`} class="absolute left-0 top-0 w-full h-full z-0 object-cover" />
                    <div class="p-4 absolute bottom-0 left-0 z-20">

                        <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
                            {data.title}
                        </h2>
                        <div class="mt-3">
                            <div>
                                <p class="font-semibold text-gray-200 text-sm">{data.about} </p>
                                <p class="font-semibold text-gray-400 text-xs"> {data.timings} </p>
                            </div>
                            <div className="gap-1 flex">
                            <Chip color="success" label="Chip Filled" />
                            <Chip color="success" label="Chip Filled" />
                            <Chip color="success" label="Chip Filled" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: data.content }} />

                </div>
            </main>
            <Newsletter/>
            <Footer />
        </>
    )
}

export default BlogPages;