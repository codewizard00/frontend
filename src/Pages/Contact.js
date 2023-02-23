import Footer from "../Footer/Footer";
import NavBar from "../Home/Component/Header";
// style={{filter: "grayscale(1) contrast(1.2) opacity(0.4)"}}
const Contact = () => {
    return (
        <>
            <NavBar />
            <section class="text-gray-600 body-font relative">
                <h1 className="text-4xl text-center my-10">संपर्क करें</h1>
                <div class="container px-5 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div class="lg:w-3/5 md:w-2/5 min-h-[500px] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
                        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div class="lg:w-1/2 px-6">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                            </div>
                            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a class="text-indigo-500 leading-relaxed">example@email.com</a>
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p class="leading-relaxed">123-456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <div class="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                            <form>
                                <div class="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                    />
                                </div>
                                <div class="mb-6">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                    />
                                </div>
                                <div class="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Your Phone"
                                        class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                    />
                                </div>
                                <div class="mb-6">
                                    <textarea
                                        rows="6"
                                        placeholder="Your Message"
                                        class="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        class="bg-primary border-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}


export default Contact;