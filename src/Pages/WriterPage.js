import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Home/Component/Header";

const WriterPage = () => {
    const [data, setData] = useState([]);
    const [related, setRelated] = useState([]);
    useEffect(() => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}get/AllWriter`,
            headers: {}
        };
        axios(config)
            .then(function (response) {
                setData(response.data.message);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])

    return (
        <>
            <NavBar />
            <div class="bg-white">
                <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 class="text-2xl font-bold tracking-tight text-gray-900">लेखक</h2>
                    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {data.map((data1, index) => (
                            <>
                                <Link to={`/writer/${data1.id}`}>
                                    <div class="group relative">
                                        <img src={data1.image} alt="Front of men&#039;s Basic Tee in black." class="object-cover object-center aspect-w-1 aspect-h-1 md:h-60 h-44" />

                                        <div class="mt-4 flex justify-between">
                                            <div>
                                                <h3 class="text-sm text-gray-700">
                                                    <a href="#">
                                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                                        {data1.name}
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WriterPage;