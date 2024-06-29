import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PlanYourJourneyCol from "../../components/home/PlanYourJourneyCol";
import Station_Logo from "/Station_logo-2.png";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";
import EscalatorIcon from "@mui/icons-material/Escalator";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LogoutIcon from "@mui/icons-material/Logout";
import TrainIcon from "@mui/icons-material/Train";
import NearbyCard from "../../components/stationPage/NearbyCard";
import ElevatorIcon from "@mui/icons-material/Elevator";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WcIcon from "@mui/icons-material/Wc";

const StationData = {
  station_name: "Taj East Gate",
  services: [
    {
      Service_Name: "Divyang Friendly Station",
      icon: <WheelchairPickupIcon fontSize="small" />,
    },
    {
      Service_Name: "Lift/Escalator",
      icon: <EscalatorIcon fontSize="small" />,
    },
    {
      Service_Name: "Parking",
      icon: <LocalParkingIcon fontSize="small" />,
    },
  ],
  LiftAndEsclators: [
    {
      type: "Escalator",
      name: "Escalator No.1",
      description: "Ground To Concourse",
    },
    {
      type: "Escalator",
      name: "Escalator No.2",
      description: "Concourse To Platform",
    },
    {
      type: "Escalator",
      name: "Escalator No.3",
      description: "Concourse To Platform",
    },
    {
      type: "Lift",
      name: "Lift No.1",
      description: "Ground To Concourse",
    },
    {
      type: "Lift",
      name: "Lift No.2",
      description: "Concourse To Platform",
    },
    {
      type: "Lift",
      name: "Lift No.3",
      description: "Concourse To Platform",
    },
    {
      type: "Lift",
      name: "Lift No.4",
      description: "Ground To Concourse",
    },
  ],
  gates: [
    {
      Gate_Number: "Gate No. 1",
      Gate_Side: "towards TDI Mall",
      icon: <LocationOnSharpIcon fontSize="small" />,
    },
    {
      Gate_Number: "Gate No. 2",
      Gate_Side: "towards Basi",
      icon: <LocationOnSharpIcon fontSize="small" />,
    },
  ],
  platforms: [
    {
      Platform_NUmber: "Platform No. 1",
      towards: "Taj East Gate",
      icon: <TrainIcon fontSize="small" />,
    },
    {
      Platform_NUmber: "Platform No. 2",
      towards: "Mankameshwar",
      icon: <TrainIcon fontSize="small" />,
    },
  ],
  facilities: [
    {
      name: "Water Cooler",
      location: "Concourse Paid Area",
    },
    {
      name: "Toilet",
      location: "Concourse Paid Area",
    },
  ],
  NearbyPlaces: [
    {
      name: "TDI Mall",
    },
    {
      name: "Taj Shilp Gram",
    },
    {
      name: "Agra Chaupati",
    },
    {
      name: "Taj Mahal East Gate",
    },
  ],
};

const StationDetails = () => {
  const [openPlanYourJourney, setOpenPlanYourJourney] = useState(false);

  const { station } = useParams();

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="sm:w-11/12 w-full">
        <header className="flex items-center justify-stretch w-full h-80 relative">
          <div className="h-60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
            <img
              src={Station_Logo}
              className="w-48 md:w-60  object-contain"
              alt=""
            />
            <h3 className="text-xs md:text-base tracking-wide text-white font-medium absolute z-10 uppercase">
              Mankameshwar
            </h3>
          </div>
          <div className="w-full relative">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 479.31 3.33"
                style={{ visibility: "visible" }}
              >
                <line
                  y1="1.64"
                  x2="479.31"
                  y2="1.64"
                  style={{
                    fill: "none",
                    stroke: "rgb(234,179,8)",
                    strokeMiterlimit: 10,
                    strokeWidth: 3,
                  }}
                />
              </svg>
              <div className="previous-station absolute -top-3 left-8 md:left-16">
                <p className="bg-yellow-500 border-4 border-white rounded-full w-6 md:w-8 h-6 md:h-8 "></p>
              </div>
              <Link to="/station/Basai">
                <h3 className="w-16 sm:w-auto text-center text-[10px] md:text-sm absolute top-6 left-8 md:left-16 hover:cursor-pointer hover:text-red-700 uppercase">
                  Basai
                </h3>
              </Link>
            </div>
          </div>

          <div className="w-full relative">
            <div className="right-8 md:right-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 479.31 3.33"
                style={{ visibility: "visible" }}
              >
                <line
                  y1="1.64"
                  x2="479.31"
                  y2="1.64"
                  style={{
                    fill: "none",
                    stroke: "rgb(234,179,8)",
                    strokeMiterlimit: 10,
                    strokeWidth: 3,
                  }}
                />
              </svg>
              <div className="next-station absolute -top-3 right-8 md:right-16">
                <p className="bg-yellow-500 border-4 border-white rounded-full w-6 md:w-8 h-6 md:h-8 "></p>
              </div>
              <Link to="/station/Taj-East-Gate">
                <h3 className="text-center text-[10px] md:text-sm absolute top-6 right-8 md:right-16 hover:cursor-pointer hover:text-red-700 uppercase w-16 sm:w-auto break-words">
                  Taj East Gate
                </h3>
              </Link>
            </div>
          </div>
        </header>
        <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-6 lg:col-span-8 order-1 lg:order-1 ">
            <section>
              <h2 className="text-lg font-bold uppercase text-black pb-2">
                {station}
              </h2>
              {/* <img src={Tracks} className="w-full h-56" alt="" /> */}
              <hr />
              <div className="my-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14199.747319586915!2d78.0581758!3d27.1582777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747199a19101d3%3A0x5bb4f86daafb7208!2sTaj%20East%20Gate%20Metro%20Station!5e0!3m2!1sen!2sin!4v1716658822242!5m2!1sen!2sin"
                  width={"100%"}
                  height={250}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </section>
            <hr />
            <section className="py-8">
              <h3 className="uppercase text-base font-bold text-red-700 pb-2">
                Station Details
              </h3>
              <div className="h-1 bg-red-700 w-[5%] mb-6"></div>
              <ul className="columns-1 sm:columns-2 w-full">
                {StationData.services.map((service) => {
                  return (
                    <li className="flex items-center justify-start gap-x-2 w-full py-1 text-sm text-gray-500">
                      <span className="">{service.icon}</span>
                      <span className="">{service.Service_Name}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
            <hr />
            <section className="py-8">
              <h3 className="uppercase text-base font-bold text-red-700 pb-2">
                Gates
              </h3>
              <div className="h-1 bg-red-700 w-[5%] mb-6"></div>
              <ul className="list-disc list-inside">
                {StationData.gates.map((Gate) => {
                  return (
                    <li className="flex flex-col py-1 text-sm my-2">
                      <span className="text-gray-600">
                        <strong>{Gate.Gate_Number}</strong>
                      </span>
                      <span className="flex items-center gap-x-2 text-gray-500 mt-2">
                        <span> {Gate.icon}</span>
                        <span>{Gate.Gate_Side}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>
            <hr />
            <section className="py-8">
              <h3 className="uppercase text-base font-bold text-red-700 pb-2">
                Lifts & Esclators
              </h3>
              <div className="h-1 bg-red-700 w-[5%] mb-6"></div>

              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                  <thead className="text-xs text-gray-600 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Desciption
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {StationData.LiftAndEsclators.map((data) => (
                      <tr key={data.name} className="bg-white border-b ">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap "
                        >
                          <span className="text-gray-500 mr-2">
                            {data.type === "Escalator" ? (
                              <EscalatorIcon fontSize="small" />
                            ) : (
                              <ElevatorIcon fontSize="small" />
                            )}
                          </span>
                          <span>{data.name}</span>
                        </th>
                        <td className="px-6 py-4">{data.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <hr />
            <section className="py-8">
              <h3 className="uppercase text-base font-bold text-red-700 pb-2">
                Platforms
              </h3>
              <div className="h-1 bg-red-700 w-[5%] mb-6"></div>
              <ul className="">
                {StationData.platforms.map((platform) => {
                  return (
                    <li className="flex gap-x-2 py-1 text-sm my-2">
                      <span className="text-gray-500">{platform.icon}</span>
                      <div className="flex flex-col">
                        <span className="text-gray-600">
                          <strong>{platform.Platform_NUmber}</strong>
                        </span>

                        <span className="flex items-center justify-center gap-x-2 mt-2">
                          <span className="text-gray-500">
                            <LogoutIcon fontSize="small" />
                          </span>
                          <span className="text-gray-600">
                            Towards {platform.towards}
                          </span>
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
            <hr />
            <section className="py-8">
              <h3 className="uppercase text-base font-bold text-red-700 pb-2">
                Station Facilities
              </h3>
              <div className="h-1 bg-red-700 w-[5%] mb-6"></div>
              <ul className="">
                {StationData.facilities.map((facility) => {
                  return (
                    <li className="flex gap-x-2 py-1 text-sm my-2">
                      <span className="text-gray-500">
                        {facility.name === "Water Cooler" ? (
                          <WaterDropIcon fontSize="small" />
                        ) : (
                          <WcIcon fontSize="small" />
                        )}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-gray-600">
                          <strong>{facility.name}</strong>
                        </span>
                        <ul className="list-disc list-inside mt-2 text-gray-600">
                          <li>{facility.location}</li>
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
            <hr />
            <section className="py-8">
              <h3 className="uppercase text-base font-bold text-red-700 pb-2">
                Nearby places
              </h3>
              <div className="h-1 bg-red-700 w-[5%] mb-6"></div>
              <div className="flex items-center gap-4 flex-wrap">
                {StationData.NearbyPlaces.map((data) => (
                  <NearbyCard key={data.name} data={data} />
                ))}
              </div>
            </section>
          </div>
          <div className="col-span-6 lg:col-span-4 -order-1 lg:order-2">
            <div className="static md:sticky top-24 z-10">
              <PlanYourJourneyCol
                openPlanYourJourneyForm={openPlanYourJourney}
                setOpenPlanYourJourneyForm={setOpenPlanYourJourney}
              />
              {/* <PlanYourJourneyCol.Button setOpenForm={setOpenPlanYourJourney} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StationDetails;
