import React from "react";
import PlanYourJourneyCol from "../../components/home/PlanYourJourneyCol";
import Station_Logo from "/Station_logo-2.png";
import Background from "/back.png";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";
import EscalatorIcon from "@mui/icons-material/Escalator";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LogoutIcon from "@mui/icons-material/Logout";
import TrainIcon from "@mui/icons-material/Train";
import NearbyCard from "../../components/Station Page/NearbyCard";

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
  gates: [
    {
      Gate_Number: "Gate No. 1",
      Gate_Side: "towards TDI Mall",
      icon: <LocationOnIcon fontSize="small" />,
    },
    {
      Gate_Number: "Gate No. 2",
      Gate_Side: "towards Basi",
      icon: <LocationOnIcon fontSize="small" />,
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
      Facility_Name: "Token Machine",
    },
    {
      Facility_Name: "Toilet",
    },
  ],
};

const StationDetails = () => {
  return (
    <section className="flex flex-col items-center justify-center ">
      <header className="w-full flex items-center justify-between md:justify-center relative ">
        <div className="w-[35%] md:w-[80%] relative ">
          <h3 className="text-sm absolute top-4 left-8 md:left-24 hover:cursor-pointer hover:text-red-700">
            Basai
          </h3>
          <div className="relative left-8 md:left-14">
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
          </div>
        </div>
        <div className="previous-station absolute left-8 md:left-24">
          <p className="bg-yellow-500 border-4 border-white rounded-full w-8 h-8 "></p>
        </div>
        <div className="w-1/2 h-60 flex items-center justify-center">
          <img
            src={Station_Logo}
            className="w-40 md:w-60  object-contain"
            alt=""
          />
          <h3 className="text-sm md:text-base tracking-wide text-white font-medium absolute ">
            Mankameshwar
          </h3>
        </div>

        <div className="w-[35%] lg:w-[80%] relative">
          <h3 className="text-sm absolute top-4 right-8 md:right-24 hover:cursor-pointer hover:text-red-700">
            Taj East Gate
          </h3>
          <div className="relative right-8 md:right-14">
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
          </div>
        </div>
        <div className="next-station absolute right-8 md:right-24">
          <p className="bg-yellow-500 border-4 border-white rounded-full w-8 h-8 "></p>
        </div>
      </header>
      <div className="py-4 w-11/12 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="col-span-6 lg:col-span-8 order-1 lg:order-1 ">
          <section>
            <h2 className="text-lg font-bold uppercase text-black pb-2">
              {StationData.station_name}
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
                  <li className="flex items-center justify-start gap-x-2 w-full py-1">
                    <span className="text-gray-500">{service.icon}</span>
                    <span className="text-gray-600">
                      {service.Service_Name}
                    </span>
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
                  <li className="flex flex-col py-1">
                    <span>
                      <strong>{Gate.Gate_Number}</strong>
                    </span>
                    <span className="flex items-center gap-x-2">
                      <span className="text-gray-500"> {Gate.icon}</span>
                      <span className="text-gray-600">{Gate.Gate_Side}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
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
                  <li className="flex gap-2 py-1">
                    <span className="text-gray-500">{platform.icon}</span>
                    <div className="flex flex-col">
                      <span>
                        <strong>{platform.Platform_NUmber}</strong>
                      </span>

                      <span className="flex items-center justify-center">
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
              Nearby places
            </h3>
            <div className="h-1 bg-red-700 w-[5%] mb-6"></div>
            <NearbyCard />
          </section>
        </div>
        <div className="col-span-6 lg:col-span-4 -order-1 lg:order-2">
          <div className="static md:sticky top-24 z-20">
            <PlanYourJourneyCol />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StationDetails;
