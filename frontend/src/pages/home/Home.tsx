import MetaData from "../../components/layout/MetaData";
import "./home.css";
import PlanYourJourneyCol from "../../components/home/PlanYourJourneyCol";
import KnowYourLocationCol from "../../components/home/KnowYourLocationCol";
import NumericCounterInfo from "../../components/home/NumericCounterInfo";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import groptoBanner1 from "/promotionBanner/groptoBanner.jpg";
import groptoBanner1 from "/promotionBanner/Holibanner.webp";
import TourGuide from "../../components/home/TourGuide";
import LatestBlogs from "../../components/home/LatestBlogs";

const Home = () => {
  return (
    <>
      <MetaData
        title="Agra Metro- Stations, Fare, Timings & Route map"
        description="Agra ghumo, Khao pio aish kro."
        keywords="Agra Metro"
        image={undefined}
      />

      <section className="w-full">
        <div className="grid place-items-center">
          <div className="sm:w-11/12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-6 p-4">
              {/* Route search form vala colomn 1, image ka size hanle krne ke liye before:bg-[length:300px_200px]*/}
              <PlanYourJourneyCol />

              {/* Route search form vala colomn 2 */}
              <KnowYourLocationCol />

              {/* Promotion colomn 3 */}
              <div className="rounded-lg md:p-4 p-2 bg-red-10 border border-[pink]-300 bg-pink-100 flex flex-col items-center justify-between gap-y-4">
                
                <div className="px-5 py-2 bg-white text-black w-full rounded-lg">
                  <h3 className="font-medium"> <span className="text-red-600">Live</span> Update</h3>

                  <div className="flex flex-wrap p-1 gap-x-4 items-center justify-start">
                    <p className="flex gap-1 items-center min-w-fit text-sm">
                      <span className="animate-pulse text-green-500">
                        <FiberManualRecordIcon fontSize="small" />
                      </span>
                      <span>Active Users: <span className="">1,200</span></span>
                    </p>
                    
                    <p className="flex gap-1 items-center min-w-fit text-sm">
                      <span className="text-cyan-500">
                        <FiberManualRecordIcon fontSize="small" />
                      </span>
                      <span>Monthly Users: <span className="">4,000</span></span>
                    </p>
                  </div>

                </div>

                <span className="text-pink-600 font-semibold text-md cursor-pointer bg-white rounded-full px-6 py-2">Sponsored</span>

               
                <div className="cursor-pointer">
                  <img src={groptoBanner1} className="rounded-lg" alt="" />
                </div>
               
                

              </div>
            </div>

            <NumericCounterInfo />

            <TourGuide />

            <LatestBlogs />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
