import React from "react";
import Location from "@/icons/Location";
import Plane from "@/icons/Plane";
import Airlines from "@/icons/ Airlines";
import Info from "@/icons/Info";

export type FlightInfoProps = {
  segment: string;
  duration: string;
  from: string;
  to: string;
  fromTime: string;
  fromDate: string;
  toTime: string;
  toDate: string;
  airline: string;
  flightNumber: string;
  aircraft: string;
  cabinClass: string;
  isDestination: boolean;
  airport: string;
  segmentName: string;
  terminal: string;
  notice: string;
};

function FlightCard({ flightInfo }: { flightInfo: FlightInfoProps }) {
  if (flightInfo.isDestination) {
    return (
      <div className="flex gap-2 py-1 text-sm max-md:flex-wrap items-center">
        <div className="text-primary ml-1">
          <Location />
        </div>
        <div className="flex flex-1 gap-2 px-4 pt-2.5 pb-3 rounded-md bg-slate-100 max-md:flex-wrap">
          <div className="flex-1 font-[475] leading-[138%] text-[#1A2B3D] text-sm">
            {flightInfo.segmentName}
          </div>
          <div className="flex-1 leading-[18px] text-right text-gray-500 text-ellipsis text-sm">
            {flightInfo.terminal && (
              <span className="font-[475] text-gray-500">
                {flightInfo.terminal}:
              </span>
            )}
            <span>{flightInfo.airport}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-2  py-1 text-sm max-md:flex-wrap items-center">
        <div className="text-[#9BA6B2] ml-1">
          <Location />
        </div>
        <div className="flex flex-1 gap-2 px-4 pt-2.5 pb-3 rounded-md bg-slate-100 max-md:flex-wrap">
          <div className="flex-1 font-[475] leading-[138%] text-[#1A2B3D] text-sm">
            {flightInfo.segmentName}
          </div>
          <div className="flex-1 leading-[18px] text-right text-gray-500 text-ellipsis text-sm">
            {flightInfo.terminal && (
              <span className="font-[475] text-gray-500">
                {flightInfo.terminal}:
              </span>
            )}
            <span>{flightInfo.airport}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-1  pt-3 items-center max-md:flex-wrap">
        <div className="ml-2">
          <Airlines />
        </div>
        <div className="flex justify-between flex-1">
          <div>
            <div className="text-base font-semibold leading-6 text-slate-800">
              {flightInfo.from} - {flightInfo.to}
            </div>
            <div className="text-sm leading-5 text-gray-500">
              {flightInfo.duration}
            </div>
          </div>
          <div>
            <div className="text-base font-semibold leading-6 text-slate-800">
              {flightInfo.fromTime}
            </div>
            <div className="text-sm leading-5 text-gray-500">
              {flightInfo.fromDate}
            </div>
          </div>
          <div>
            <div className="text-base font-semibold leading-6 text-slate-800">
              {flightInfo.toTime}
            </div>
            <div className="text-sm leading-5 text-gray-500">
              {flightInfo.toDate}
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="">
          <div className="w-[2px] h-[30%] bg-[#D8E1EB] mx-auto"></div>
          <div className=" text-[#9BA6B2]">
            <Plane />
          </div>
          <div className="w-[2px] h-[30%] bg-[#D8E1EB] mx-auto"></div>
        </div>

        <div className="flex-1 py-4  min-h-[100px]">
          <div className="flex gap-3 pr-20 text-sm max-md:flex-wrap max-md:pr-5">
            <div className="flex flex-col flex-1">
              <div className="text-gray-700 whitespace-nowrap font-[475] text-ellipsis">
                {flightInfo.airline}
              </div>
              <div className="mt-1.5 text-gray-500">
                Flight no : {flightInfo.flightNumber}
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center text-gray-500">
              <div className="whitespace-nowrap text-ellipsis">
                {flightInfo.aircraft}
              </div>
              <div className="mt-1.5 leading-5">
                Class :
                <span className="text-gray-500 font-[475]">
                  {flightInfo.cabinClass}
                </span>
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center text-gray-500"></div>
          </div>
          {flightInfo.notice && (
            <div className="flex gap-2 px-3 py-2 mt-4 text-xs leading-4 text-gray-700 bg-orange-100 rounded-md border border-amber-100 border-solid max-md:flex-wrap">
              <Info />
              <div className="flex-1 max-md:max-w-full">
                {flightInfo.notice}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FlightCard;
