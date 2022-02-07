import { useContext, useEffect } from "react";
//importing components
import { contextProvider } from "../components/context";
import { mainContextProvider } from "../components/dataBase";

const Profile = () => {
  const [database, setDatabase] = useContext(mainContextProvider);
  const [allInformation, setAllInformation] = useContext(contextProvider);
  console.log(typeof allInformation);
  console.log(allInformation);
  console.log(database);

  useEffect(() => {
    if (Object.entries(allInformation).length !== 0) {
      setDatabase((prev) => [...prev, allInformation]);
    }
    setAllInformation({});
  }, []);

  return (
    <div className="bg-blue-500 w-[80%] overflow-auto h-100 position-absolute p-2 right-0">
      {database.length > 0 &&
        database.map((booking, index) => (
          <div
            key={index}
            className="bg-blue-400 w-100 text-sm rounded my-2 p-2 text-white position-relative"
          >
            <h5 className="m-0 p-0">
              Name:{" "}
              <span className="text-blue-600 text-lg">{booking.name}</span>
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
              Date:{" "}
              <span className="text-blue-600 text-lg">{booking.date}</span>
            </h6>
            <h6 className="m-0 p-0">
              Time:{" "}
              <span className="text-blue-600 text-lg">{booking.time}</span>
            </h6>
            <button className="bg-blue-600 text-white p-1 rounded position-absolute bottom-4 right-3">
              cancel
            </button>
          </div>
        ))}
    </div>
  );
};

export default Profile;

/** <div className="bg-blue-400 w-100 rounded p-2 text-white position-relative">
        <h5>
          Name:{" "}
          <span className="text-blue-600 text-lg">{allInformation.name}</span>
        </h5>
        <h6>
          Phone Number:{" "}
          <span className="text-blue-600 text-lg">{allInformation.phNo}</span>
        </h6>
        <h6>
          You have to meet with{" "}
          <span className="text-blue-600 text-lg">{allInformation.type}</span>.
        </h6>
        <h6>
          Date:{" "}
          <span className="text-blue-600 text-lg">{allInformation.date}</span>
        </h6>
        <h6>
          Time:{" "}
          <span className="text-blue-600 text-lg">{allInformation.time}</span>
        </h6>
        <button className="bg-blue-600 text-white p-1 rounded position-absolute bottom-4 right-3">
          cancel
        </button>
      </div> */
