
import second from '/promotionBanner/Holibanner.webp'


export default function LatestBlogs() {


    return (
        <>


            <section className="xl:px-18 px-4 md:px-6 py-8">

                <div className="font-quando lg:p-4 text-center p-2 text-gray-600 font-bold lg:text-3xl text-3xl">Latest Blogs</div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 cursor-pointer items-center justify-items-center gap-6 py-6 px-3 md:px-1 w-full">


                    <div className="max-w-sm hover:shadow-md bg-white border border-gray-200 hover:border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={second} alt="" />
                        </a>
                        <div className="px-5 pb-4">
                            <a href="#">
                                <h5 className="my-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021.</p> */}
                            <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>



                </div>
            </section >



        </>)
}

