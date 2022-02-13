import { createContext, useState, useContext } from "react";
//importing components

export const contextProvider = createContext();

export const ContextContainer = (props) => {
  const [allInformation, setAllInformation] = useState({});
  const [number, setNumber] = useState(0);
  return (
    <contextProvider.Provider
      value={[allInformation, setAllInformation, number, setNumber]}
    >
      {props.children}
    </contextProvider.Provider>
  );
};
