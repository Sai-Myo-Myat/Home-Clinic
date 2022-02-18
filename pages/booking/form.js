import { useReducer, useContext, useRef } from "react";
import Link from "next/link";
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

  const makeChange = (e) => {
    dispatch({
      type: "change",
      value: e.target.value.toString(),
      name: e.target.name,
    });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    const id = Math.random() + 1;
    setAllInformation((prev) => {
      if (datas.time) {
        const meridian = "";
        const hourAndMinute = datas.time.split(":");

        const [hour, minute] = hourAndMinute;
        console.log("hour:", hour, "minutes", minute);
        //minute < 10 ? (minute = minute[1]) : minute; //to be appear correctly
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
        } else {
          refOne.current = true;
        }
        //else if (
        //   booking.setMinutes(booking.getMinutes() - 5) <
        //   bookingTime.getTime() <
        //   booking.setMinutes(booking.getMinutes() + 5)
        // ) {
        //   alert("This is a duration of other's booking.");
        //   console.log(booking);
        //   refOne.current = false;
        //   return;
        // }
      });

      if (refOne.current === true) {
        setBookingTimes((prev) => [...prev, bookingTime]);
        console.log("bookingTimes", bookingTimes);
      }

      // if (Object.entries(allInformation).length >= 5) {
      //   refOne.current = true;
      // } else {
      //   refOne.current = false;
      //   console.log("length", Object.entries(allInformation).length);
      //   alert("fill all information please");
      // }

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
    // if (Object.entries(allInformation).length > 2) {
    //   alert("Fill all information first please!");
    // }
  };

  return (
    <div className="h-full flex justify-center flex-col items-center">
      <h1>Please be sure to fill all information</h1>
      <form className="w-50">
        <div className="form-group mb-3 text-white">
          <label htmlFor="exampleInputEmail1 ">Name</label>
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
          <label htmlFor="exampleInputPassword1">Phone-number</label>
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
          <label htmlFor="exampleInputDate">Date</label>
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
          <label htmlFor="exampleInputTime">Time</label>
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

      {/*  */}
    </div>
  );
};

export default Form;
