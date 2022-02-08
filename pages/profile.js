import { useContext, useEffect } from "react";
//importing components
import { contextProvider } from "../components/context";
import { mainContextProvider } from "../components/dataBase";
import BookingCard from "../components/bookingCard";

const Profile = () => {
  const [database, setDatabase, number, setNumber] =
    useContext(mainContextProvider);
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
          <BookingCard booking={booking} index={index} />
        ))}
    </div>
  );
};

export default Profile;
