import React from "react";
import PlanYourJourneyCol from "../../components/home/PlanYourJourneyCol";
import Tracks from "/train-tracks.png";

const StationDetails = () => {
  return (
    <div>
      <section className="border border-black flex items-center justify-center ">
        <div className="w-11/12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-6 lg:col-span-8 order-1 lg:order-1 border border-black pt-8">
            <h2 className="text-lg font-bold uppercase text-red-700">Station Name</h2>
            <div className="h-1 bg-red-700 w-[5%]"></div>
            <img src={Tracks} className="w-full h-56" alt="" />
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
            <hr />
            <div className="py-8">
                <h3 className="uppercase text-base font-bold text-red-700">Station Details</h3>
                <div className="h-1 bg-red-700 w-[5%]"></div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-4 -order-1 lg:order-2">
            <PlanYourJourneyCol />
          </div>
        </div>
      </section>
    </div>
  );
};

export default StationDetails;
