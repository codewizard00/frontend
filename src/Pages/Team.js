import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Home/Component/Header";
import axios from "axios";

const Team = () => {
    const [data, setData] = useState([]);
    const GetAllTeams = () => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}get/Allteams`,
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
        GetAllTeams();
    }, [])

    return (
        <>
            <NavBar />

            <div class="w-full bg-gray-100 dark:bg-gray-800 px-10 py-10">
                <div class="container flex justify-center mx-auto pt-10">
                    <div>
                        <h1 class="xl:text-4xl text-3xl font-[Hind] text-center text-gray-800 dark:text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                            संगठन के परदे के पीछे प्रतिभाशाली लोग</h1>
                    </div>
                </div>
                <div class="container max-w-screen-xl mx-auto">
                    <div role="list" aria-label="Behind the scenes People " class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around gap-4">
                        {data.map((value, index) => (
                            <div key={index} role="listitem" class="xl:w-1/4 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                    <div class="absolute -mt-20 w-full flex justify-center">
                                        <div class="h-32 w-32">
                                            <img src={`${value.image_url}`} alt={`${value.image_alt}`} role="img" class="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div class="px-6 pb-6 mt-16">
                                        <h1 class="font-bold dark:text-white text-3xl text-center mb-1">{value.fullName}</h1>
                                        <p class="text-gray-800 dark:text-white text-sm text-center">{value.place} ,{value.position}</p>
                                        <p class="text-center max-h-52 overflow-y-scroll scrollbar-hide text-gray-600 dark:text-gray-200 text-base pt-3  font-normal">{value.about}</p>
                                        {/* <div class="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" class="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" class="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" class="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                                </div>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Team;
