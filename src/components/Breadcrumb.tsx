import ChevronRight from "@/icons/ChevronRight";

const dataList = [
  {
    label: "Home",
    id: 1,
  },
  {
    label: "Booking History",
    id: 2,
  },
  {
    label: "Flight",
    id: 3,
  },
  {
    label: "STFL17121182045413",
    id: 4,
  },
];

function Breadcrumb() {
  return (
    <ul className="mb-5 text-gray-500 flex space-x-3 items-center text-[13px]">
      {dataList.map((data, indx) => {
        if (indx === dataList.length - 1)
          return (
            <li className="text-primary" key={data.id}>
              {data.label}
            </li>
          );

        return (
          <li key={data.id} className="flex items-center space-x-3">
            <p>{data.label}</p> <ChevronRight />
          </li>
        );
      })}
    </ul>
  );
}

export default Breadcrumb;
