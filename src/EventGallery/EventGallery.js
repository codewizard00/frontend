const EventGallery = () => {
    return (
        <>
            <h1 className="text-5xl my-10 font-[hind] text-navy font-bold text-center" >
                आने वाले कार्यक्रम
            </h1>
            <section class="overflow-hidden text-gray-700">
                <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                    <div class="flex flex-wrap -m-1 md:-m-2">
                        <div class="flex flex-wrap  w-full md:w-1/2">
                            <div class="w-full sm:w-1/2 p-1 md:p-2 relative">
                                <div className="absolute bottom-8 left-4">
                                    <button className="bg-orange-600 text-white py-2 px-6 rounded-lg">Read More</button>
                                </div>
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674907766/Premsudha/upcoming_klewf5.jpg" />
                            </div>
                            <div class="w-full sm:w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674907766/Premsudha/upcoming_klewf5.jpg" />
                            </div>
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674907766/Premsudha/upcoming_klewf5.jpg" />
                            </div>
                        </div>
                        <div class="flex flex-wrap  w-full md:w-1/2">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674907766/Premsudha/upcoming_klewf5.jpg" />
                            </div>
                            <div class="w-full sm:w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674907766/Premsudha/upcoming_klewf5.jpg" />
                            </div>
                            <div class="w-full sm:w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://res.cloudinary.com/valarmorghullis/image/upload/v1674907766/Premsudha/upcoming_klewf5.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EventGallery;