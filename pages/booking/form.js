//importing components
import Stepper from "../../components/Stepper";

const Form = (props) => {
  return (
    <div className="h-full flex justify-center items-center">
      {/* <Stepper /> */}
      <form className="w-50">
        <div className="form-group mb-3 text-white">
          <label for="exampleInputEmail1 ">Name</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group mb-3 text-white">
          <label for="exampleInputPassword1">Phone-number</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Phone No"
          />
        </div>
        <div className="form-group mb-3 text-white">
          <label for="exampleInputDate">Date</label>
          <input
            type="date"
            className="form-control select-none"
            id="exampleInputDate"
          />
        </div>
        <div className="form-group mb-3 text-white">
          <label for="exampleInputTime">Time</label>
          <input
            type="time"
            className="form-control select-none"
            id="exampleInputTime"
          />
        </div>
        {/* <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
