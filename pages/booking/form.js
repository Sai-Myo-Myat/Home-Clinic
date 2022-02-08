import { useReducer, useContext, useEffect } from "react";
//importing components
import { mainContextProvider } from "../../components/dataBase";
import { contextProvider } from "../../components/context";
const initialDatas = { name: "", phNo: "", date: "", time: "" };

const reducer = (state, { name, value, type }) => {
  switch (type) {
    case "change":
      return { ...state, [name]: value };
      break;
    default:
      return state;
      break;
  }
};

const Form = () => {
  const [database, setDatabase, number, setNumber] =
    useContext(mainContextProvider);
  const [allInformation, setAllInformation] = useContext(contextProvider);
  const [datas, dispatch] = useReducer(reducer, initialDatas);

  useEffect(() => {
    console.log(allInformation);
  }, []);

  const makeChange = (e) => {
    dispatch({ type: "change", value: e.target.value, name: e.target.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllInformation((prev) => {
      console.log(datas);
      return { ...prev, ...datas };
    });
  };

  return (
    <div className="h-full flex justify-center items-center">
      <form className="w-50">
        <div className="form-group mb-3 text-white">
          <label htmlFor="exampleInputEmail1 ">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            onChange={makeChange}
          />
        </div>
        <div className="form-group mb-3 text-white">
          <label htmlFor="exampleInputPassword1">Phone-number</label>
          <input
            type="number"
            name="phNo"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Phone No"
            onChange={makeChange}
          />
        </div>
        <div className="form-group mb-3 text-white">
          <label htmlFor="exampleInputDate">Date</label>
          <input
            type="date"
            name="date"
            className="form-control select-none"
            id="exampleInputDate"
            onChange={makeChange}
          />
        </div>
        <div className="form-group mb-3 text-white">
          <label htmlFor="exampleInputTime">Time</label>
          <input
            type="time"
            name="time"
            className="form-control select-none"
            id="exampleInputTime"
            onChange={makeChange}
          />
        </div>
        {/* <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
