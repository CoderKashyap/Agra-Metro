import MetaData from "../../components/layout/MetaData";
import "./home.css";
import PlanYourJourneyCol from "../../components/home/PlanYourJourneyCol";
import KnowYourLocationCol from "../../components/home/KnowYourLocationCol";
import NumericCounterInfo from "../../components/home/NumericCounterInfo";
import Features from "../../components/home/Features";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Banner from "/Holibanner.webp";

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

              {/* Promotion & Notification colomn 3 */}
              {/* <div className="shadow-md rounded-lg p-2 bg-pink-200 flex justify-center items-center">
                                I love code
                                <span
                                    className="ml-1"
                                    style={{ color: "red", fontSize: "200%" }}
                                >
                                    &hearts;
                                </span>
                            </div> */}
              <div className="rounded-lg  flex flex-col items-center justify-between">
                <div className="bg-white w-full rounded-lg">
                  <div>
                    <span className="animate-pulse text-green-500">
                      <FiberManualRecordIcon fontSize="medium" />
                    </span>
                    <span>Active Users: 4</span>
                    <span className="text-green-500">
                      <FiberManualRecordIcon fontSize="medium" />
                    </span>
                    <span>Monthly Active Users: 4,000</span>
                  </div>
                </div>
                <div className=" ">
                  <img src={Banner} className="aspect-video" alt="" />
                </div>
              </div>
            </div>

            <NumericCounterInfo />

            <Features />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
