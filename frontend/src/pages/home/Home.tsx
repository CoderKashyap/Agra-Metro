import MetaData from "../../components/layout/MetaData";
import "./home.css";
import PlanYourJourneyCol from "../../components/home/PlanYourJourneyCol";
import KnowYourLocationCol from "../../components/home/KnowYourLocationCol";
import NumericCounterInfo from "../../components/home/NumericCounterInfo";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import groptoBanner1 from "/promotionBanner/groptoBanner.jpg";
// import groptoBanner2 from "/promotionBanner/Holibanner.webp";
import TourGuide from "../../components/home/TourGuide";

const Home = () => {
  return (
    <>
      <MetaData
        title="Welcome to Agra Metro Rail | Agra Metro"
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
              <div className="rounded-lg md:p-4 p-1 bg-red-10 borde border-red-30 flex flex-col items-center justify-between md:gap-y-4 gap-y-6">
                
                <div className="px-4 py-2 bg-gray-100 w-full rounded-lg">
                  <h3 className="font-semibold text-gray-600">Live Update</h3>
                  <div className="flex flex-wrap gap-x-2 items-center justify-start">
                    <p className="flex gap-1 items-center min-w-fit text-sm">
                      <span className="animate-pulse text-green-500">
                        <FiberManualRecordIcon fontSize="small" />
                      </span>
                      <span>Active Users: 4k</span>
                    </p>
                    
                    <p className="flex gap-1 items-center min-w-fit text-sm">
                      <span className="text-green-500">
                        <FiberManualRecordIcon fontSize="small" />
                      </span>
                      <span>Monthly Users: 4,000</span>
                    </p>
                  </div>
                </div>

                <div className="">
                  <img src={groptoBanner1} className="rounded-lg" alt="" />
                </div>


                <div className="">
                  <img src={groptoBanner1} className="rounded-lg" alt="" />
                </div>


              </div>
            </div>

            <NumericCounterInfo />

            <TourGuide />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
