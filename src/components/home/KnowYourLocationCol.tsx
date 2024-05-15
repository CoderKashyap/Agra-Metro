import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ZoomInMapOutlinedIcon from '@mui/icons-material/ZoomInMapOutlined';

const KnowYourLocationCol = () => {
    const [isZoom, setIsZoom] = useState(false)


    return (
        <>
            <div className='flex flex-col gap-6'>

                <div className="before:absolute before:bg-contain overflow-hidden before:h-40 before:w-full before:top-4 sm:before:top-6 before:left-12 sm:before:left-20 before:opacity-10 before:bg-no-repeat before:bg-cente before:bg-[url('/watermarks/metro.png')] relative  shadow-md bg-[#f5ffef] border border-[#b3d09f] rounded-lg p-4">

                    <div className="flex items-center gap-2"> <SearchIcon className="text-[#acec84]" fontSize="medium" /> <h2 className="text-lg font-medium text-gray-800">Know Your Station</h2></div>

                    <div className="relative">
                        <input type="text" name="aboutStation" id="aboutStation" className="my-3 shadow-sm text-gray-900 rounded-md focus:outline-none focus:ring-0 border border-gray-300 focus:border-gray-400 block w-full p-2" placeholder="Search station or click to select" required />
                    </div>

                    <div className="mt-4 flex justify-end items-center">
                        <button className="bg-[#02555b] rounded-md text-white font-medium text-sm p-2 px-6" type="submit">Advanced Search</button>
                    </div>

                </div>


                <div className="shadow-md bg-gray-100 border border-gray-300 rounded-lg p-4">

                    <div className="flex items-center gap-2 mb-2"> <PinDropIcon className="text-gray-300" fontSize="medium" /> <h2 className="text-lg font-medium text-gray-800">Agra Metro Map</h2></div>

                    <div onClick={() => setIsZoom(true)} className="overflow-hidden rounded-lg h-28 cursor-pointer">

                        <img width="500" className="transition-transform duration-300 transform hover:scale-110" src="/agra-route-map.png" alt="" srcSet="/agra-route-map.png" />

                    </div>

                </div>


            </div>

            {isZoom &&
                <div className='h-full w-full fixed top-0 left-0 bg-white'>
                    <div className="flex justify-center items-center h-screen">
                        <img width="1020" className="" src="/agra-route-map.png" alt="" srcSet="/agra-route-map.png" />
                    </div>
                    <span onClick={() => setIsZoom(false)} className='cursor-pointer fixed border border-1 border-gray-800 p-3 rounded-full text-gray-600 bottom-20 right-24'>
                        <ZoomInMapOutlinedIcon fontSize='medium' />
                    </span>
                </div>
            }
        </>
    )
}

export default KnowYourLocationCol