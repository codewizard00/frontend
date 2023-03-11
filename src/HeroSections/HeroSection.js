


const HeroSection = ({left}) => {
   
    return (
        <>
            <div className="bg-gray-100" >
                <section className="max-w-screen-xl mx-auto dark:bg-gray-800 dark:text-gray-100 bg-gray-100">
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className={`flex ${left?"":"order-last"} flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left`}>
                            <h1 className="text-5xl font-bold leading-none lg:text-left sm:text-6xl">Special Tribute to Kabir Das
                            </h1>
                            <p className="mt-6 mb-8 text-left text-lg sm:mb-12">
                                Born in the city of Varanasi in what is now Uttar Pradesh, he is known for being critical of both organized religion and religions. He questioned what he regarded to be the meaningless and unethical practices of all religions, primarily what he considered to be the wrong practices in the Hindu and Muslim religions.During his lifetime, he was threatened by both Hindus and Muslims for his views. When he died, several Hindus and the Muslims he had inspired claimed him as theirs
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg decoration-none no-underline hover:text-gray-100 hover:bg-navy font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Know More</a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img src="" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HeroSection;