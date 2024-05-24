
import banner1 from "/promotionBanner/Holibanner.webp";

// import second from '/promotionBanner/Holibanner.webp'

export default function TourGuide() {

    const bannerData = [
        {
            image: banner1,
            heading: "Famous Attractions",
            description: "Agra’s Must-Visit Architectural Gems"
        },
        {
            image: banner1,
            heading: "Hotel, Restro & cafes",
            description: "Agra’s Best Dine, Play, Enjoy & Stay."
        },
        {
            image: banner1,
            heading: "Famous Markets",
            description: "The Pulse of Agra's Streets."
        },
        {
            image: banner1,
            heading: "Enjoy & Entertain",
            description: "Malls, Cinema, & Adventure in Agra."
        }
    ]


    return (
        <>

            <section className="xl:px-18 px-3">

                <div className="font-quando lg:p-4 text-center p-2 text-gray-600 font-bold lg:text-3xl text-3xl">Tour Guide</div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 cursor-pointer items-center justify-items-center gap-6 py-6 px-3 md:px-1 w-full">
                    {bannerData.map((data, i) => (
                        <div
                            key={i}
                            className="group border border-gray-300 hover:shadow-md rounded-2xl p-4 md:p-4 flex justify-center items-center flex-col w-full h-full xl:w-full transition-all duration-100 ease-in-out"
                        >
                            <img
                                height="300"
                                width="300"
                                className="group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-175 ease-in-out object-contain"
                                src={data.image}
                                alt="image1"
                                srcSet=""
                            />
                            <h1 className="font-quando text-gray-600 group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-175 ease-in-out text-md sm:text-lg font-semibold mt-3">
                                {data.heading}
                            </h1>
                            <p className="text-xs text-center text-gray-500">
                                {data.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>



        </>)
}
