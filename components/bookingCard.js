import { useContext } from "react";

import { mainContextProvider } from "./dataBase";

const BookingCard = ({ booking }) => {
  const [database, setDatabase] = useContext(mainContextProvider);
  const bookingTime = new Date(
    booking.year,
    booking.month - 1,
    booking.day,
    booking.hour,
    booking.minute
  );
  console.log(bookingTime);

  const cancelFun = () => {
    const currentTime = new Date();
    currentTime.setDate(currentTime.getDate() + 1);
    if (currentTime.getTime() < bookingTime.getTime()) {
      alert("Cancel Now!");
      setDatabase(() => {
        return database.filter((element) => element.id !== booking.id);
      });
    } else {
      alert("You have to cancel it one day in advance!");
    }
  };

  return (
    <div className="bg-blue-400 w-100 text-sm rounded my-2 p-2 text-white position-relative">
      <h5 className="m-0 p-0">
        Name: <span className="text-blue-600 text-lg">{booking.name}</span>
      </h5>
      <h6 className="m-0 p-0">
        Phone Number:{" "}
        <span className="text-blue-600 text-lg">{booking.phNo}</span>
      </h6>
      <h6 className="m-0 p-0">
        You have to meet with{" "}
        <span className="text-blue-600 text-lg">{booking.type}</span>.
      </h6>
      <h6 className="m-0 p-0">
        Date: <span className="text-blue-600 text-lg">{booking.date}</span>
      </h6>
      <h6 className="m-0 p-0">
        Time:{" "}
        <span className="text-blue-600 text-lg">
          {booking.time} ({booking.meridian})
        </span>
      </h6>
      <button
        onClick={cancelFun}
        className="bg-blue-600 text-white p-1 rounded position-absolute bottom-4 right-3"
      >
        cancel
      </button>
    </div>
  );
};

export default BookingCard;
