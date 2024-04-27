import Logo from "/metroAgraLogo.webp";
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Appstore_Logo from "/Appstore.webp";
import Playstore_Logo from "/playstore.webp";

const Footer = () => {

    return (
        <>

            <footer className="border-t">
                <div className="mx-auto lg:mx-10 px-4 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4">
                        <div className="col-span-1 md:col-span-3">
                            <div className="">
                                <img src={Logo} alt="delhimetrorail" className="h-12 lg:h-16"  />
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-9 ">
                            <div className="px-4">
                                <h3 className="text-xl font-bold">Quick Links</h3>
                                <ul className="flex flex-wrap flex-col md:flex-row md:items-center justify-start md:divide-x-2 divide-black my-4">
                                    <li className="md:pr-2 hover:text-red-700"><a href="/miscellaneous">Miscellaneous</a></li>
                                    <li className="md:px-2 hover:text-red-700"><a href="/emergency-evacuation-plan">Evacuation Guidelines</a></li>
                                    <li className="md:px-2 hover:text-red-700 "><a href="/faq">FAQ’s</a></li>
                                    <li className="md:px-2 hover:text-red-700 "><a href="/security-dmrc">Security</a></li>
                                    <li className="md:px-2 hover:text-red-700 "><a href="/contact-us">Help &amp; Contact </a></li>
                                    <li className="md:px-2 hover:text-red-700 "><a href="/disclaimer">Disclaimer</a></li>
                                    <li className="md:px-2 hover:text-red-700 "><a href="/privacy-policy">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <hr className="mx-4 border border-gray-200" />
                            <div className="flex flex-col md:flex-row items-start justify-between gap-x-4 mt-4">
                                <div className="flex flex-col md:flex-row w-full ">
                                    <div className="col-span-1 px-4 ">DMRC Helpline no.<strong>155370 <b>(This call is chargeable as per calling party pay basis)</b></strong></div>
                                    <div className="col-span-1 px-4 ">CISF Helpline no.<strong>155655</strong></div>
                                </div>
                                <div className="w-full mt-4 md:m-0">
                                    <ul className="flex items-center justify-center gap-x-4">
                                        <li className="flex justify-center"><img src={Appstore_Logo} className="object-contain w-[60%] md:w-[80%]" width={140} alt="" /></li>
                                        <li className="flex justify-center"><img src={Playstore_Logo} className="object-contain w-[60%] md:w-[80%]" width={140} alt="" /></li>
                                    </ul>
                                </div>
                                <div className="mt-4 md:m-0 w-full">
                                    <ul className="flex items-center justify-center gap-x-2 lg:gap-x-4">
                                        <li className="hover:cursor-pointer"><FacebookIcon fontSize="medium" /></li>
                                        <li className="hover:cursor-pointer"><XIcon fontSize="medium" /></li>
                                        <li className="hover:cursor-pointer"><InstagramIcon fontSize="medium" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    {/* <span className='font-semibold'>Agra Metro</span> */}
                    <span className='font-semibold'>Under construction</span>
                    <span>All right reserved &copy; <span className='font-semibold'>Abhishek Kashyap</span></span>
                </div>
            </footer>

        </>
    )
}

export default Footer