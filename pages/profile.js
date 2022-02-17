import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
//importing components
import { contextProvider } from "../components/context";
import { mainContextProvider } from "../components/dataBase";
import BookingCard from "../components/bookingCard";

const Profile = () => {
  const [database, setDatabase] = useContext(mainContextProvider);
  const [allInformation, setAllInformation] = useContext(contextProvider);
  console.log("database", database);

  useEffect(() => {
    if (allInformation && Object.entries(allInformation).length > 5) {
      setDatabase((prev) => [...prev, allInformation]);
    } else {
      alert("Fill all information please");
    }
    setAllInformation({});
  }, []);

  return (
    <motion.div
      animate={{ width: "50vw", padding: "5px" }}
      initial={{ width: 0, padding: 0 }}
      className="bg-[#BFFFF0] overflow-auto h-100 position-absolute right-0"
    >
      {database.length > 0 &&
        database.map((booking, index) => (
          <BookingCard booking={booking} key={index} id={index} />
        ))}
    </motion.div>
  );
};

export default Profile;

/** database.length > 0 &&
            database.map((booking, index) => (
              <BookingCard booking={booking} index={index} />
            ))
        ), */
