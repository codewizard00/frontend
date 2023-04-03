import Footer from "../Footer/Footer";
import NavBar from "../Home/Component/Header";
// style={{filter: "grayscale(1) contrast(1.2) opacity(0.4)"}}
const Contact = () => {
    return (
        <>
            <NavBar />
            <section class="text-gray-600 body-font relative">
                <h1 className="text-4xl text-center mt-4">संपर्क करें</h1>
                <div class="container max-w-screen-sm pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
                  
                    <div class="bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <div class="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                            <form>
                                <div class="mb-6">
                                    <input
                                        type="text"
                                        placeholder="आप का नाम"
                                        class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                    />
                                </div>
                                <div class="mb-6">
                                    <input
                                        type="email"
                                        placeholder="आप का ईमेल"
                                        class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                    />
                                </div>
                                <div class="mb-6">
                                    <input
                                        type="text"
                                        placeholder="आप का फ़ोन नंबर"
                                        class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                    />
                                </div>
                                <div class="mb-6">
                                    <textarea
                                        rows="6"
                                        placeholder="आप का मैसेज"
                                        class="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        class="bg-primary border-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90"
                                    >
                                        मैसेज भेजे
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