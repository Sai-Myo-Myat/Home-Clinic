const BookingCard = ({ booking, index }) => {
  return (
    <div
      key={index}
      className="bg-blue-400 w-100 text-sm rounded my-2 p-2 text-white position-relative"
    >
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
        Time: <span className="text-blue-600 text-lg">{booking.time}</span>
      </h6>
      <button className="bg-blue-600 text-white p-1 rounded position-absolute bottom-4 right-3">
        cancel
      </button>
    </div>
  );
};

export default BookingCard;
