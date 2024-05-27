import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import FlightDetails from "@/components/FlightDetails";
import { flightDetails } from "@/data";

function Home() {
  return (
    <div className="min-h-screen bg-[#EBF0F5]">
      <Header />
      <main className="self-center w-full  max-md:max-w-full container mx-auto mt-5 px-3">
        <div className="flex space-x-0 md:space-x-6">
          <SideMenu />

          <div className="flex flex-col w-full md:w-[78%] ">
            <Breadcrumb />
            <div className="flex flex-col grow self-stretch  max-md:max-w-full">
              <FlightDetails flightDetails={flightDetails} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
