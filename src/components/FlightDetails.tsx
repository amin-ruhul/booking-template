import React from "react";
import FlightCard from "./FlightCard";
import { type FlightInfoProps } from "./FlightCard";

type FlightDetailsProps = {
  route: string;
  tripType: string;
  dates: string;
  stops: string;
  totalDuration: string;
  segments: FlightInfoProps[];
};

function FlightDetails({
  flightDetails,
}: {
  flightDetails: FlightDetailsProps;
}) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-sm max-md:max-w-full">
      <div className="p-4 flex justify-between items-center border-b border-solid border-slate-100">
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
            <span>1</span>
          </div>
          <div className="space-y-1">
            <div className="text-lg font-semibold tracking-normal leading-6 text-[#1A2B3D] max-md:max-w-full">
              {flightDetails.route}
            </div>
            <div className="flex gap-1.5  py-px text-sm leading-4 text-[#5A6573] max-md:flex-wrap">
              <div>{flightDetails.tripType}</div>
              <div>{flightDetails.dates}</div>
              <div className="max-md:max-w-full">{flightDetails.stops}</div>
            </div>
          </div>
        </div>
        <div className="justify-center self-stretch px-2 py-1 my-auto text-xs leading-4 text-right  bg-indigo-50 font-[475] rounded-[32px] inline-block">
          <p className="text-primary">{flightDetails.totalDuration}</p>
        </div>
      </div>

      <div className="flex flex-col p-4 bg-white rounded-lg max-md:max-w-full">
        {flightDetails.segments.map((segment) => (
          <FlightCard flightInfo={segment} />
        ))}
      </div>
    </div>
  );
}

export default FlightDetails;
