import Link from "next/link";
import { useContext, useReducer, useState } from "react";
import { motion } from "framer-motion";
//importing components
import { contextProvider } from "../../components/context";

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
          return { ...choose, select: false };
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
  const [allInformation, setAllInformation] = useContext(contextProvider);

  const handleType = () => {
    types.map((type) => {
      if (type.select === true) {
        setAllInformation((prev) => ({ ...prev, type: type.name }));
      }
    });
  };

  const parentVariant = {
    hidden: {
      opacity: 0,
    },
    visiable: {
      opacity: 1,
      transition: {
        type: "tweet",
        duration: 1,
        when: "beforeChildren",
      },
    },
  };

  const childrenVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visiable: {
      opacity: 1,
      y: 0,
      staggerChildren: 0.3,
    },
  };

  return (
    <div className="text-stone-100 text-[#FFBBBB]  h-full flex-col flex items-center py-6">
      <div>
        <motion.h1
          variants={parentVariant}
          animate="visiable"
          initial="hidden"
          className="text-4xl font-bold "
        >
          What is your Health Problem and Who do you want to meet?
        </motion.h1>
      </div>
      <motion.div
        variants={parentVariant}
        animate="visiable"
        initial="hidden"
        className="w-50 h-50 flex items-center justify-around"
      >
        {types.map((type, index) => (
          <motion.div
            variants={childrenVariant}
            className="position-relative "
            key={index}
            onClick={() => {
              dispatch({ change: "change", id: type.id });
            }}
          >
            <motion.div
              className={`cursor-pointer text-blue-500  p-2 rounded ${
                type.select
                  ? "bg-[#BFFFF0] text-[#FFBBBB] "
                  : "bg-[#FFBBBB] text-[#BFFFF0]"
              }`}
            >
              <h3>{type.name}</h3>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <Link href="/booking/form" passHref>
        <button
          onClick={handleType}
          className="text-[#FFBBBB] font-bold text-2xl rounded mt-20 "
        >
          next➯
        </button>
      </Link>
    </div>
  );
};

export default Appointment;
