import { createContext, useState } from "react";

export const bookingTimesContext = createContext();

export const BookingTimesContainer = (props) => {
  const [bookingTimes, setBookingTimes] = useState([]);
  return (
    <bookingTimesContext.Provider value={[bookingTimes, setBookingTimes]}>
      {props.children}
    </bookingTimesContext.Provider>
  );
};
