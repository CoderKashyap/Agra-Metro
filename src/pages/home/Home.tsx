import MetaData from "../../components/layout/MetaData";
import CountUp from 'react-countup';
import "./home.css";
import { useEffect, useState } from "react";

const stations = [{ stationName: "Agra Fort" }, { stationName: "Taj East Gate" }, { stationName: "Basai" }, { stationName: "Tdi Mall" }]

const Home = () => {

    const [fromStation, setFromStation] = useState("");

    const [showFromStation, setShowFromStation] = useState(false);
    const [stationObjRemake, setStationObjRemake] = useState<Array<{ stationName: string }>>([]);
    const [toStationObjRemake, setToStationObjRemake] = useState<Array<{ stationName: string }>>([]);


    const [toStation, setToStation] = useState("");
    const [showToStation, setShowToStation] = useState(false);


    useEffect(() => {
        if (stations) setStationObjRemake(stations)
        if (stations) setToStationObjRemake(stations)
    }, [stations]);


    const createStationsObjForDropdown = (stationName: string) => {
        const filteredStations = stations?.filter(station => station.stationName.toLowerCase().includes(stationName.toLowerCase()));
        setStationObjRemake(filteredStations);
        if (stationName.length > 0) { setShowFromStation(true) } else { setShowFromStation(false); setStationObjRemake([]) }
    }

    const createToStationsObjForDropdown = (stationName: string) => {
        const filteredStations = stations?.filter(station => station.stationName.toLowerCase().includes(stationName.toLowerCase()));
        setToStationObjRemake(filteredStations);
        if (stationName.length > 0) { setShowToStation(true) } else { setShowToStation(false); setToStationObjRemake([]) }
    }



    return (
        <>
            <MetaData
                title="Welcome to Agra Metro Rail | Agra Metro"
                description="Agra ghumo, Khao pio aish kro." keywords="Agra Metro" image={undefined} />

            <section onClick={() => {setShowFromStation(false); setShowToStation(false)}} className="w-full">
                <div className="grid place-items-center">
                    <div className="lg:mx-10">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-6 p-4">

                            <div className="col-span- row-span-4 shadow-md bg-[#c7edfe] p-4 rounded-lg">
                                <div className="flex items-center gap-2"> <img height="40px" width="40px" src="/UPMRC.png" alt="Metro Agra Logo" /> <span className="text-lg font-medium text-gray-800">Plan Your Journey</span></div>
                                <div className="text-sm my-4 text-gray-700">Click here to plan through <span className="text-blue-600">Interactive Map</span></div>

                                <form>

                                    <div onClick={(e) => e.stopPropagation()} className="relative">
                                        <label htmlFor="fromStation" className="text-sm font-medium text-red-700 block mb-1">From</label>

                                        {fromStation && fromStation ?
                                            <div onClick={() => setShowFromStation(!showFromStation)} className="flex items-center justify-between cursor-pointer shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 w-full p-1.5">
                                                <div className="flex items-center">
                                                    <img className="sm:h-7 sm:w-7 h-6 w-6 mx-2 object-contain" src="/metroAgraLogo.webp"
                                                        data-src="/metroAgraLogo.webp" // Store the high-quality image URL in a data attribute
                                                        loading="lazy" // Enable lazy loading in supporting browsers
                                                        alt="brandImage"></img>
                                                    <span className="mx-2"> {fromStation} </span>
                                                </div>
                                                <div onClick={(e) => { e.stopPropagation(); setFromStation("") }} className="rounded-full text-xs px-2 py-1.5 text-white bg-green-700">Search</div>
                                            </div> : <>
                                                <div onClick={() => setShowFromStation(!showFromStation)} className="flex justify-center items-center">
                                                    <input type="text" name="station" id="fromStation" className="shadow-sm border border-cyan-400 text-gray-900 sm:text-sm rounded-md focus:outline-none focus:ring-0 focus:border-red-600 block w-full p-2" placeholder="Search station or click to select" onChange={(e)=> createStationsObjForDropdown(e.target.value)} required />
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6  absolute right-2 text-gray-600 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M5.293 6.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </>}


                                        {showFromStation &&
                                            <div className={`border border-gray-300 absolute w-full z-10 rounded-b-lg bg-white overflow-y-auto h-auto max-h-96`}>


                                                {stationObjRemake && stationObjRemake.map((station: { stationName: string }, index: number) => (
                                                    <div onClick={() => { setFromStation(station.stationName); setShowFromStation(false); }} key={index} className="flex items-center cursor-pointer">
                                                        <img className="sm:h-18 sm:w-18 h-10 w-8 mx-2 object-contain" src="/metroAgraLogo.webp"
                                                            data-src="/metroAgraLogo.webp"
                                                            loading="lazy"
                                                            alt="brandImage"></img>
                                                        <span className="mx-2"> {station.stationName} </span>
                                                    </div>
                                                ))}

                                            </div>}

                                    </div>


                                    <div onClick={(e) => e.stopPropagation()} className="relative my-4">
                                        <label htmlFor="toStation" className="text-sm font-medium text-red-700 block mb-1">To</label>

                                        {toStation && toStation ?
                                            <div onClick={() => setShowToStation(!showToStation)} className="flex items-center justify-between cursor-pointer shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 w-full p-1.5">
                                                <div className="flex items-center">
                                                    <img className="sm:h-7 sm:w-7 h-6 w-6 ml-2 object-contain" src="/metroAgraLogo.webp"
                                                        data-src="/metroAgraLogo.webp" // Store the high-quality image URL in a data attribute
                                                        loading="lazy" // Enable lazy loading in supporting browsers
                                                        alt="brandImage"></img>
                                                    <span className="ml-2"> {toStation} </span>
                                                </div>
                                                <div onClick={(e) => { e.stopPropagation(); setToStation("") }} className="rounded-full text-xs px-2 py-1.5 text-white bg-green-700">Search</div>
                                            </div> : <>
                                                <div onClick={() => setShowToStation(!showToStation)} className="flex justify-center items-center">
                                                    <input type="text" name="toStation" id="toStation" className="shadow-sm border border-cyan-400 text-gray-900 sm:text-sm rounded-md focus:outline-none focus:ring-0 focus:border-red-600 block w-full p-2" placeholder="Search station or click to select" onChange={(e)=> createToStationsObjForDropdown(e.target.value)} required />
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6  absolute right-2 text-gray-600 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M5.293 6.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </>}


                                        {showToStation &&
                                            <div className={`border border-gray-300 absolute w-full z-20 rounded-b-lg bg-white overflow-y-auto h-auto max-h-96`}>


                                                {toStationObjRemake && toStationObjRemake.map((station: { stationName: string }, index: number) => (
                                                    <div onClick={() => { setToStation(station.stationName); setShowToStation(false); }} key={index} className="flex items-center cursor-pointer">
                                                        <img className="sm:h-18 sm:w-18 h-10 w-8 ml-2 object-contain" src="/metroAgraLogo.webp"
                                                            data-src="/metroAgraLogo.webp" // Store the high-quality image URL in a data attribute
                                                            loading="lazy" // Enable lazy loading in supporting browsers
                                                            alt="brandImage"></img>
                                                        <span className="ml-2"> {station.stationName} </span>
                                                    </div>
                                                ))}

                                            </div>}
                                    </div>

                                    <div className="mt-8 flex justify-between items-center">
                                        <button className="font-medium text-sm underline" type="reset">Reset</button>
                                        <button className="bg-[#c0282c] rounded-md text-white font-medium text-sm p-2 px-6" type="submit">Show Route & Fare</button>
                                    </div>

                                </form>

                            </div>

                            <div className="col-span- shadow-md border border-gray-200 rounded-lg md:p-2 p-1">

                                <div className="flex items-center justify-between py-1">
                                    <div className="flex flex-col justify-center items-center gap-1 p-2 border-r-2 border-gray-200"> <span className="tabular-nums text-[#57b490] text-3xl font-bold duration-[3s] ease-out"> <CountUp end={30} enableScrollSpy /> </span> <span className="text-xs font-medium text-gray-600">Network Length (km)<span className="text-red-600">*</span></span></div>
                                    <div className="flex flex-col justify-center items-center gap-1 p-2 border-r-2 border-gray-200"> <span className="tabular-nums text-[#57b490] text-3xl font-bold duration-[3s] ease-out"> <CountUp end={2} enableScrollSpy /> </span> <span className="text-xs font-medium text-gray-600">No. of Lines<span className="text-red-600">*</span></span></div>
                                    <div className="flex flex-col justify-center items-center gap-1 p-2"> <span className="tabular-nums text-[#57b490] text-3xl font-bold duration-[3s] ease-out"> <CountUp end={28} enableScrollSpy /> </span> <span className="text-xs font-medium text-gray-600">No. of Stations<span className="text-red-600">*</span></span></div>
                                </div>
                                <div className="text-xs text-gray-600 font-normal"> <span className="text-red-600">*</span>Only 6 stations is working yet, from Mankameshwar to Taj East Gate.</div>

                            </div>
                            <div className="col-span- shadow-md rounded-lg p-2 bg-pink-200">Promotion section</div>

                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;
