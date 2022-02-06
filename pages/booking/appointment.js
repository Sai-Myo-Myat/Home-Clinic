import Link from "next/link";
import { useReducer, useState } from "react";

const initialTypes = [
  { name: "Genearl", select: false, id: 1 },
  { name: "Dentist", select: false, id: 2 },
  { name: "Heart Specialist", select: false, id: 3 },
];

const reducer = (state, action) => {
  switch (action.change) {
    case "change":
      return state.map((choose) => {
        if (choose.id === action.id) {
          return { ...choose, select: !choose.select };
        } else {
          return choose;
        }
      });
      break;
    default:
      return state;
      break;
  }
};

const Appointment = () => {
  const [types, dispatch] = useReducer(reducer, initialTypes);

  const selected = (type) => {
    dispatch({ change: "change", id: type.id });
  };

  return (
    <div className="text-stone-100 h-full flex-col flex items-center py-6">
      <div>
        <h1 className="text-4xl font-bold">
          What is your Health Problem and Who do you want to meet?
        </h1>
      </div>
      <div className="w-50 h-50 flex items-center justify-around">
        {types.map((type, index) => (
          <div
            className="position-relative"
            key={index}
            onClick={selected(type)}
          >
            <div className=" bg-blue-200 text-blue-500 p-2 rounded">
              <h3>{type.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <Link href="/booking/form" passHref>
        <button className="text-blue-500 font-bold text-2xl rounded mt-20 ">
          next➯
        </button>
      </Link>
    </div>
  );
};

export default Appointment;
