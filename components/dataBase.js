import { createContext, useState } from "react";

export const mainContextProvider = createContext();

export const MainContextContainer = (props) => {
  const [database, setDatabase] = useState([]);
  return (
    <mainContextProvider.Provider value={[database, setDatabase]}>
      {props.children}
    </mainContextProvider.Provider>
  );
};
