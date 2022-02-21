import { useContext } from "react";

import { mainContextProvider } from "./dataBase";
import { bookingTimesContext } from "./bookingTimes";

const BookingCard = ({ booking }) => {
  const [database, setDatabase] = useContext(mainContextProvider);
  const [bookingTimes, setBookingTimes] = useContext(bookingTimesContext);

  const cancelFun = () => {
    const currentTime = new Date();
    currentTime.setDate(currentTime.getDate() + 1);
    if (currentTime.getTime() < booking.bookingTime.getTime()) {
      alert("Cancel Now!");
      setDatabase(() => {
        return database.filter((element) => element.id !== booking.id);
      });
      setBookingTimes(() =>
        bookingTimes.filter(
          (b) => b.getTime() !== booking.bookingTime.getTime()
        )
      );
    } else {
      alert("You have to cancel it one day in advance!");
    }
  };

  return (
    <div className="bg-[#1D5353] text-[#FFBBBB] w-100 h-auto text-sm rounded my-2 p-1 position-relative">
      <h5 className="m-0 p-0">
        Name: <span className="text-[#BFFFF0] text-lg">{booking.name}</span>
      </h5>
      <h6 className="m-0 p-0">
        Phone Number:{" "}
        <span className="text-[#BFFFF0] sm:text-lg">{booking.phNo}</span>
      </h6>
      <h6 className="m-0 p-0">
        You have to meet with{" "}
        <span className="text-[#BFFFF0] sm:text-lg">{booking.type}</span>.
      </h6>
      <h6 className="m-0 p-0">
        Date: <span className="text-[#BFFFF0] sm:text-lg">{booking.date}</span>
      </h6>
      <h6 className="m-0 p-0">
        Time:{" "}
        <span className="text-[#BFFFF0] sm:text-lg">
          {booking.time} ({booking.meridian})
        </span>
      </h6>
      <button
        onClick={cancelFun}
        className="bg-[#FFBBBB] text-[#BFFFF0] p-1 rounded mt-1 position-absolute bottom-2 right-1"
      >
        cancel
      </button>
    </div>
  );
};

export default BookingCard;
