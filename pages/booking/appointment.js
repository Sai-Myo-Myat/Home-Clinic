import Link from "next/link";
import { useContext, useReducer, useRef, useState } from "react";
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
  const refTwo = useRef(false);

  const handleType = () => {
    if (refTwo.current) {
      types.map((type) => {
        if (type.select === true) {
          setAllInformation((prev) => ({ ...prev, type: type.name }));
        }
      });
    } else {
      alert("choose one");
    }
  };

  const parentVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visiable: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
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
      {types && (
        <motion.div
          variants={parentVariant}
          animate="visiable"
          initial="hidden"
          className="w-50 h-50 flex items-center justify-around"
        >
          {types.map((type, index) => (
            <motion.div
              className="position-relative"
              key={index}
              onClick={() => {
                refTwo.current = true;
                dispatch({ change: "change", id: type.id });
              }}
            >
              <motion.div
                variants={childrenVariant}
                className={`cursor-pointer p-2 rounded ${
                  type.select
                    ? "bg-[#BFFFF0] text-[#FFBBBB] "
                    : "bg-[#FFBBBB] text-[#BFFFB9]"
                }`}
              >
                <h3>{type.name}</h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}
      <Link href={`${refTwo.current ? "/booking/form" : ""}`} passHref>
        <motion.button
          variants={parentVariant}
          animate="visiable"
          initial="hidden"
          onClick={handleType}
          className="text-[#FFBBBB] font-bold text-2xl rounded mt-20 "
        >
          next➯
        </motion.button>
      </Link>
    </div>
  );
};

export default Appointment;
