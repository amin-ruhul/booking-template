import React from "react";
import Location from "@/icons/Location";
import Plane from "@/icons/Plane";
import Airlines from "@/icons/ Airlines";

function FlightCard({ destination }) {
  if (destination) {
    return (
      <div className="flex gap-3 px-0.5 py-1 text-sm max-md:flex-wrap items-center">
        <div className="text-[#1882FF]">
          <Location />
        </div>
        <div className="flex flex-1 gap-2 px-4 pt-2.5 pb-3 rounded-md bg-slate-100 max-md:flex-wrap">
          <div className="flex-1 font-[475] leading-[138%] text-[#1A2B3D] text-sm">
            Departure from Dhaka
          </div>
          <div className="flex-1 leading-[18px] text-right text-[#5A6573] text-ellipsis text-sm">
            <span className="font-[475] text-[#5A6573]">Terminal 1:</span>
            <span>Hazrat Shahjalal International Airport</span>
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
            Departure from Dhaka
          </div>
          <div className="flex-1 leading-[18px] text-right text-[#5A6573] text-ellipsis text-sm">
            <span className="font-[475] text-[#5A6573]">Terminal 1:</span>
            <span>Hazrat Shahjalal International Airport</span>
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
              DAC - DXB
            </div>
            <div className="text-sm leading-5 text-gray-500">12 hr 20 min</div>
          </div>
          <div>
            <div className="text-base font-semibold leading-6 text-slate-800">
              07:30 PM
            </div>
            <div className="text-sm leading-5 text-gray-500">
              28 Mar, Friday
            </div>
          </div>
          <div>
            <div className="text-base font-semibold leading-6 text-slate-800">
              08:50 AM
            </div>
            <div className="text-sm leading-5 text-gray-500">
              29 Mar, Saturday
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
                Turkish Airlines
              </div>
              <div className="mt-1.5 text-gray-500">Flight no : TUR467</div>
            </div>
            <div className="flex flex-col flex-1 justify-center text-gray-500">
              <div className="whitespace-nowrap text-ellipsis">
                Airbus Industrie 737-800-738
              </div>
              <div className="mt-1.5 leading-5">
                Class :{" "}
                <span className="text-gray-500 font-[475]">ECONOMY-Y (O)</span>
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center text-gray-500"></div>
          </div>
          <div className="flex gap-2 px-3 py-2 mt-4 text-xs leading-4 text-gray-700 bg-orange-100 rounded-md border border-amber-100 border-solid max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4310b95a7b2124e63c47a8479af3a73091cc2126e9c2259628494aa8b1514cca?apiKey=fd12b7bfca3943019ddc9bad275d062e&"
              className="shrink-0 my-auto w-5 aspect-square"
            />
            <div className="flex-1 max-md:max-w-full">
              Technical stoppage at Malpensa International Airport (Milano).
              Before booking this flight please check your visa requirements as
              per your nationality
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightCard;
