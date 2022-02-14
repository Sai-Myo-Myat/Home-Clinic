import { createContext, useState, useContext } from "react";
//importing components

export const contextProvider = createContext();

export const ContextContainer = (props) => {
  const [allInformation, setAllInformation] = useState({});
  return (
    <contextProvider.Provider value={[allInformation, setAllInformation]}>
      {props.children}
    </contextProvider.Provider>
  );
};
