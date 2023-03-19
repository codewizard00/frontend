


const HeroSection = ({ left }) => {

    return (
        <>
            <div className="bg-gray-100" >
                <section className="max-w-screen-xl mx-auto dark:bg-gray-800 dark:text-gray-100 bg-gray-100">
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className={`flex ${left ? "" : "order-last"} flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left`}>
                            <h1 className="text-2xl font-bold leading-none lg:text-left sm:text-4xl">कबीर दास को विशेष श्रद्धांजलि
                            </h1>
                            <p className="mt-6 mb-8 text-left text-lg sm:mb-12">
                                कबीरदास या कबीर 15वीं सदी के भारतीय रहस्यवादी कवि और संत थे। वे हिन्दी साहित्य के भक्तिकाल के निर्गुण शाखा के ज्ञानमर्गी उपशाखा के महानतम कवि हैं। इनकी रचनाओं ने हिन्दी प्रदेश के भक्ति आंदोलन को गहरे स्तर तक प्रभावित किया। उनकी रचनाएँ सिक्खों के आदि ग्रंथ में सम्मिलित की गयी हैं। वे हिन्दू धर्म व इस्लाम को मानते हुए धर्म एक सर्वोच्च ईश्वर में विश्वास रखते थे। उन्होंने सामाज में फैली कुरीतियों, कर्मकांड, अंधविश्वास की निंदा की और सामाजिक बुराइयों की कड़ी आलोचना भी।उनके जीवनकाल के दौरान हिन्दू और मुसलमान दोनों ने उन्हें बहुत सहयोग किया। कबीर पंथ नामक सम्प्रदाय इनकी शिक्षाओं के अनुयायी हैं। हजारी प्रसाद द्विवेदी ने इन्हें मस्तमौला कहा।
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <a target="_blank" rel="noopener noreferrer" href="https://hi.wikipedia.org/wiki/%E0%A4%95%E0%A4%AC%E0%A5%80%E0%A4%B0#:~:text=%E0%A4%95%E0%A4%AC%E0%A5%80%E0%A4%B0%E0%A4%A6%E0%A4%BE%E0%A4%B8%20%E0%A4%AF%E0%A4%BE%20%E0%A4%95%E0%A4%AC%E0%A5%80%E0%A4%B0%2015%E0%A4%B5%E0%A5%80%E0%A4%82%20%E0%A4%B8%E0%A4%A6%E0%A5%80,%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B8%E0%A4%AE%E0%A5%8D%E0%A4%AE%E0%A4%BF%E0%A4%B2%E0%A4%BF%E0%A4%A4%20%E0%A4%95%E0%A5%80%20%E0%A4%97%E0%A4%AF%E0%A5%80%20%E0%A4%B9%E0%A5%88%E0%A4%82%E0%A5%A4" className="px-8 py-3 border-2 border-solid border-navy rounded-lg  text-lg decoration-none no-underline hover:text-gray-100 hover:bg-navy font-semibold rounded dark:bg-violet-400 dark:text-gray-900">अधिक के लिए यहां क्लिक करें</a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img src="http://hindivibes.com/wp-content/uploads/2021/10/%E0%A4%95%E0%A4%AC%E0%A5%80%E0%A4%B0_%E0%A4%A6%E0%A4%BE%E0%A4%B8_Kabir_Das.webp?x76094" alt="kabir_das" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-[400px]" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HeroSection;