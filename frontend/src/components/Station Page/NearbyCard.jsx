import React from "react";
import Logo from "/sunset.jpg";
const NearbyCard = () => {
  return <div className="border overflow-hidden rounded-md w-fit group">
    <div className="w-fit overflow-hidden">
      <img src={Logo} className="group-hover:cursor-pointer group-hover:scale-110 transition-all ease-in-out duration-200 delay-75 w-80 object-contain" alt="" />
    </div>
    <div className="p-2">
        <h3 className="my-2 text-base font-semibold">Place Name</h3>
        <hr />
        <div className="text-sm flex items-center justify-between my-1">
            <span className="w-full">Distance</span>
            <span className="w-full text-gray-600">1.5 Km</span>
        </div>
        <div className="text-sm flex items-center justify-start my-1">
            <span className="w-full">Walking Time</span>
            <span className="text-gray-600 w-full">10 Minutes</span>
        </div>
    </div>
  </div>;
};

export default NearbyCard;

