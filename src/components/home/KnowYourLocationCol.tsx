import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import SearchIcon from '@mui/icons-material/Search';
import PinDropIcon from '@mui/icons-material/PinDrop';

const KnowYourLocationCol = () => {



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

                    <div className="overflow-hidden rounded-lg h-28 cursor-pointer">

                        <Zoom>
                            <img width="500" className="transition-transform duration-300 transform hover:scale-110" src="/agra-route-map.png" alt="" srcSet="/agra-route-map.png" />
                        </Zoom>
                    </div>

                </div>


            </div>
        </>
    )
}

export default KnowYourLocationCol