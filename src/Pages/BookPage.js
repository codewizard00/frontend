import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Home/Component/Header";

const BookPage = () => {
    const { id } = useParams();
    const [data, setData] = useState("");
    const [related, setRelated] = useState([]);
    useEffect(() => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}get/books/${id}`,
            headers: {}
        };
        axios(config)
            .then(function (response) {
                setData(response.data.message);
            })
            .catch(function (error) {
                console.log(error);
            });
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_PROD_URL}get/AllBook/book`,
            headers: {}
        };
        axios(config)
            .then(function (response) {
                setRelated(response.data.message);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

   

    return (
        <>
            <NavBar />
            <div class="antialiased">
                <div class="bg-navy text-gray-200 md:text-center py-2 px-4">
                    Only few Pieces left
                </div>
                <div class="py-6">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex items-center space-x-2 text-gray-400 text-sm">
                            <a href="#" class="hover:underline hover:text-gray-600">होम</a>
                            <span>
                                <svg class="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                            <a href="#" class="hover:underline hover:text-gray-600">पुस्तकें</a>
                            <span>
                                <svg class="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                            <span>
                                {data.title}
                            </span>
                        </div>
                    </div>
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                        <div class="flex flex-col md:flex-row -mx-4">
                            <div class="md:flex-1 px-4">
                                <div x-data="{ image: 1 }" x-cloak>
                                    <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                                        <div x-show="image === 1" class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                                            <span class="text-5xl">
                                                <img className="h-64 lg:h-72" src={data.image} alt={data.image_alt} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="md:flex-1 px-4">
                                <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{data.title}</h2>
                                <p class="text-gray-500 text-sm"> द्वारा <a href="#" class="text-indigo-600 hover:underline">Premsudha</a></p>

                                <div class="flex items-center space-x-4 my-4">
                                    <div>
                                        <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                                            {/* <span class="text-indigo-400 mr-1 mt-1">$</span> */}
                                            <span class="font-bold text-indigo-600 text-3xl">{data.price}</span>
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-green-500 text-xl font-semibold">Save 12%</p>
                                        <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                                    </div>
                                </div>

                                <p class="text-gray-500">{data.about}</p>

                                <div class="flex py-4 space-x-4">
                                    <div class="relative">
                                        <div class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
                                        <select class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>

                                        <svg class="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                        </svg>
                                    </div>

                                    <button class="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-600 text-white text-sm font-medium rounded-md">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-7 w-7 mr-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                        </svg>
                                        WhatsApp
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div class="bg-white">

                <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

                    <h2 class="text-2xl font-bold tracking-tight text-gray-900">More Products</h2>
                    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {related.map((data, index) => (
                            <>
                                <div class="group relative">
                                    <img src={data.image} alt="Front of men&#039;s Basic Tee in black." class="object-cover object-center aspect-w-1 aspect-h-1 md:h-60 h-44" />
                                    <div class="mt-4 flex justify-between">
                                        <div>
                                            <h3 class="text-sm text-gray-700">
                                                <a href="#">
                                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                                    {data.title}
                                                </a>
                                            </h3>
                                        </div>
                                        <p class="text-sm font-medium text-gray-900">{data.price}</p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default BookPage;