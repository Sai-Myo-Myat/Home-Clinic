import { useReducer, useContext, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
//importing components
import { mainContextProvider } from "../../components/dataBase";
import { contextProvider } from "../../components/context";
import { bookingTimesContext } from "../../components/bookingTimes";
const initialDatas = {};

const reducer = (state, { name, value, type }) => {
  switch (type) {
    case "change":
      return { ...state, [name]: value };
      break;
    default:
      return state;
      break;
  }
};

const Form = () => {
  const [database, setDatabase] = useContext(mainContextProvider);
  const [allInformation, setAllInformation] = useContext(contextProvider);
  const [bookingTimes, setBookingTimes] = useContext(bookingTimesContext);
  const [datas, dispatch] = useReducer(reducer, initialDatas);
  const refOne = useRef(true);

  const variantOne = {
    hidden: {
      x: "-100vw",
    },
    show: {
      x: 0,
      transition: {
        type: "tweet",
        duration: 1,
      },
    },
    exit: {
      x: "-100vw",
    },
  };

  const makeChange = (e) => {
    dispatch({
      type: "change",
      value: e.target.value.toString(),
      name: e.target.name,
    });
  };
  const handleSubmit = (e) => {
    const id = Math.random() + 1;
    setAllInformation((prev) => {
      if (datas.time) {
        const meridian = "";
        const hourAndMinute = datas.time.split(":");

        const [hour, minute] = hourAndMinute;
        console.log("hour:", hour, "minutes", minute);
        const dates = datas.date.split("-");
        const [year, month, day] = dates;
        console.log("dates", dates);
        if (hour > 12) {
          meridian = "PM";
        } else if (hour < 12) {
          meridian = "AM";
          if (hour === 0) {
            hour = 12;
          }
        } else {
          meridian = "PM";
          hour = 0;
        }
      }

      const bookingTime = new Date(year, month - 1, day, hour, minute);

      const currentTime = new Date();
      currentTime.setHours(currentTime.getHours() + 1);
      if (bookingTime.getTime() < currentTime.getTime()) {
        alert("You have to make a booking 1 hour in advance");
        refOne.current = false;
        return allInformation;
      } else {
        refOne.current = true;
      }

      bookingTimes.map((booking) => {
        if (booking.getTime() === bookingTime.getTime()) {
          alert("this time is not available!");
          refOne.current = false;
          setAllInformation(allInformation);
          return;
        } else if (
          booking.getTime() > bookingTime.getTime() &&
          booking.setMinutes(booking.getMinutes() - 10) < bookingTime.getTime()
        ) {
          alert("this is the duration of other's booking");
          refOne.current = false;
          return;
        } else {
          refOne.current = true;
        }
      });

      if (refOne.current === true) {
        setBookingTimes((prev) => [...prev, bookingTime]);
        console.log("bookingTimes", bookingTimes);
      }

      if (refOne.current === true) {
        return {
          ...prev,
          ...datas,
          meridian,
          bookingTime,
          id,
        };
      }
    });
  };

  return (
    <motion.div
      variants={variantOne}
      animate="show"
      initial="hidden"
      className="flex justify-around h-full items-center flex-col md:p-10"
    >
      <h1 className="text-[#FFBBBB]">Please be sure to fill all information</h1>
      <form id="form" className="w-50" action="#" method="#">
        <div className="form-group mb-3">
          <label className="text-[#FFBBBB]" htmlFor="exampleInputEmail1 ">
            Name
          </label>
          <input
            required
            type="text"
            name="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            onChange={makeChange}
          />
        </div>
        <div className="form-group mb-3 text-white">
          <label className="text-[#FFBBBB]" htmlFor="exampleInputPassword1">
            Phone-number
          </label>
          <input
            required
            type="number"
            name="phNo"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Phone No"
            onChange={makeChange}
          />
        </div>
        <div className="form-group mb-3 text-white">
          <label className="text-[#FFBBBB]" htmlFor="exampleInputDate">
            Date
          </label>
          <input
            required
            type="date"
            name="date"
            className="form-control select-none"
            id="exampleInputDate"
            onChange={makeChange}
          />
        </div>
        <div className="form-group mb-3 text-white">
          <label className="text-[#FFBBBB]" htmlFor="exampleInputTime">
            Time
          </label>
          <input
            required
            type="time"
            name="time"
            className="form-control select-none"
            id="exampleInputTime"
            onChange={makeChange}
          />
        </div>
      </form>
      <Link passHref href={"/profile"}>
        <button
          type="submit"
          onClick={handleSubmit}
          className="p-2 rounded-lg mt-5 bg-[#FFBBBB] text-[#BFFFF0]"
        >
          Submit
        </button>
      </Link>
    </motion.div>
  );
};

export default Form;
