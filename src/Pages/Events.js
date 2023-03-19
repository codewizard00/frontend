import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../Home/Component/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Event = () => {
    const [data, setData] = useState([]);

    const getAllCompetition = () => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}get/AllCompetion/Competitions`,
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
        getAllCompetition();
    }, [])
    return (
        <>
            <NavBar />
            {data.map((value, index) => (
                <Link key={index} to={`/events/${value.id}`}>
                <div class="mt-20 max-w-[50%] min-w-[400px] mx-auto px-20">
                    <div className='bg-[rgb(245 245 245)]'>
                        <div class="space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0 cursor-auto" >
                            <a href="https://stackdiary.com/" class="group">
                                <div class="aspect-w-3 aspect-h-2">
                                    <img class="object-cover shadow-lg rounded-lg group-hover:opacity-75 cursor-auto" src={`${value.image_url}`} alt={`${value.image_alt}`} />
                                </div>
                            </a>
                            <div class="sm:col-span-2 cursor-auto" >
                                <div class="flex items-center cursor-auto space-x-3" >
                                    <div class="flex items-center cursor-auto space-x-2" >
                                        <span class="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input cursor-auto" >
                                            <svg class="mr-1.5 h-2 w-2 brand-react" fill="currentColor" viewBox="0 0 8 8">
                                                <circle cx="4" cy="4" r="3"></circle>
                                            </svg>
                                            Tag #1
                                        </span>
                                    </div>
                                </div>
                                <div class="mt-2 cursor-auto" >
                                    <a href="https://laravel.cm/articles/traquer-un-champ-validation-conditionelle-react-hook-form-5" class="group">
                                        <h4 class="text-lg leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary cursor-auto" >{value.title}</h4>
                                    </a>
                                    <p class="mt-1 text-sm font-normal text-skin-base leading-5 sursor-auto" >
                                        {value.abour}
                                    </p>
                                    <div class="mt-3 flex items-center font-sans">
                                        <div class="shrink-0">
                                            <a href="https://stackdiary.com/">
                                                <span class="sr-only">{value.place}</span>
                                                <img class="h-10 w-10 rounded-full" src="https://stackdiary.com/140x100.png" alt="Ekim Kael" />
                                            </a>
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-sm font-medium text-skin-inverted">
                                                <a href="https://stackdiary.com" class="hover:underline">
                                                    {value.place}
                                                </a>
                                            </p>
                                            <div class="flex space-x-1 text-sm text-skin-muted">
                                                <time datetime="2022-02-01">{value.createdAt}</time>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
            ))}
            <Footer />
        </>
    )
}

export default Event;