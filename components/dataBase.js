import { createContext, useState } from "react";

export const mainContextProvider = createContext();

export const MainContextContainer = (props) => {
  const [database, setDatabase] = useState([]);
  const [number, setNumber] = useState(database.length);
  return (
    <mainContextProvider.Provider
      value={[database, setDatabase, number, setNumber]}
    >
      {props.children}
    </mainContextProvider.Provider>
  );
};
