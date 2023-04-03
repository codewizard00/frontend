const Newsletter = () => {
    return (
        <>
            <div class="container max-w-screen-xl my-40  mx-auto">

                <section class="mb-32 text-gray-800">
                   
                    <div class="container text-gray-800 px-4 md:px-12">
                        <div
                            class="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6"
                            style={{
                                marginTop: "-100px",
                                background: "hsla(0, 0%, 100%, 0.8)",
                                backdropFilter: "blur(30px)"
                            }}
                        >
                            <div class="flex flex-wrap justify-center text-center lg:text-left">
                                <div class="grow-0 shrink-0 basis-auto w-full px-6">
                                    <div class="grid lg:grid-cols-2 gap-x-6 items-center">
                                        <div class="mb-10 lg:mb-0">
                                            <h2 class="text-3xl font-[kamal] font-bold">
                                                कोई भी अपडेट मिस न करें।
                                                <br />
                                                <span class="text-navy">न्यूज़लेटर की सदस्यता लें</span>
                                            </h2>
                                        </div>

                                        <div class="mb-6 md:mb-0">
                                            <div class="md:flex flex-row">
                                                <input
                                                    type="text"
                                                    class="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    placeholder="Enter your email"
                                                />
                                                <button
                                                    type="submit"
                                                    class="inline-block px-7  h-10 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                                    data-mdb-ripple="true"
                                                    data-mdb-ripple-color="light"
                                                >
                                                    Subscribe
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Newsletter;