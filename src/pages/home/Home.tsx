import MetaData from "../../components/layout/MetaData";
import CountUp from 'react-countup';
import "./home.css";

const Home = () => {
    return (
        <>
            <MetaData
                title="Welcome to Agra Metro Rail | Agra Metro"
                description="Agra ghumo, Khao pio aish kro." keywords="Agra Metro" image={undefined} />

            <section className="w-full">
                <div className="grid place-items-center">
                    <div className="max-w-7xl">

                        <div className="grid grid-cols-12 gap-4 p-6">

                            <div className="col-span-4 shadow-md bg-[#c7edfe] p-4 rounded-lg">
                                <div className="flex items-center gap-2"> <img height="40px" width="40px" src="/UPMRC.png" alt="Metro Agra Logo" /> <span className="text-lg font-medium text-gray-800">Plan Your Journey</span></div>
                                <div className="text-sm my-4 text-gray-700">Click here to plan through <span className="text-blue-600">Interactive Map</span></div>
                            </div>

                            <div className="col-span-5 shadow-md border border-gray-200 rounded-lg p-2">

                                <div className="flex items-center justify-between py-1">
                                    <div className="flex flex-col justify-center items-center gap-1 p-2 border-r-2 border-gray-200"> <span className="tabular-nums text-[#57b490] text-3xl font-bold duration-[3s] ease-out"> <CountUp end={30} enableScrollSpy /> </span> <span className="text-sm font-medium text-gray-600">Network Length (km)<span className="text-red-600">*</span></span></div>
                                    <div className="flex flex-col justify-center items-center gap-1 p-2 border-r-2 border-gray-200"> <span className="tabular-nums text-[#57b490] text-3xl font-bold duration-[3s] ease-out"> <CountUp end={2} enableScrollSpy /> </span> <span className="text-sm font-medium text-gray-600">Number of Lines<span className="text-red-600">*</span></span></div>
                                    <div className="flex flex-col justify-center items-center gap-1 p-2"> <span className="tabular-nums text-[#57b490] text-3xl font-bold duration-[3s] ease-out"> <CountUp end={28} enableScrollSpy /> </span> <span className="text-sm font-medium text-gray-600">Number of Stations<span className="text-red-600">*</span></span></div>
                                </div>
                                <div className="text-xs text-gray-600 font-normal"> <span className="text-red-600">*</span>Only 6 stations is working yet, from Mankameshwar to Taj East Gate.</div>

                            </div>
                            <div className="col-span-3 shadow-md rounded-lg p-2 bg-slate-300">03</div>

                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;
