const Stepper = () => {
  return (
    <div className=" border-box space-y-0 h-50">
      {/* <ul className="position-relative mt-10 w-100 px-10 flex justify-around border-t-4">
        <li className="position-absolute -top-4 left-10 cursor-pointer rounded-full flex justify-center items-center p-0 text-white h-8 bg-blue-500 w-8">
          1
        </li>
        <li className="position-absolute -top-4 cursor-pointer rounded-full flex justify-center items-center text-white h-8 bg-blue-500 w-8">
          2
        </li>
        <li className="position-absolute right-10 -top-4 cursor-pointer rounded-full flex justify-center items-center text-white content-center h-8 bg-blue-500 w-8">
          3
        </li>
      </ul> */}
      <ul class="stepper horizontal px-10" id="horizontal-stepper">
        <li class="step active">
          <div class="step-title waves-effect waves-dark">Step 1</div>
          <div class="step-new-content">
            <div class="row">
              <div class="md-form col-12 ml-auto">
                <input
                  id="email-horizontal"
                  type="email"
                  class="validate form-control"
                  required
                />
                <label for="email-horizontal">Email</label>
              </div>
            </div>
            <div class="step-actions">
              <button
                class="waves-effect waves-dark btn btn-sm btn-primary next-step"
                data-feedback="someFunction21"
              >
                CONTINUE
              </button>
            </div>
          </div>
        </li>
        <li class="step">
          <div class="step-title waves-effect waves-dark">Step 2</div>
          <div class="step-new-content">
            <div class="row">
              <div class="md-form col-12 ml-auto">
                <input
                  id="password-horizontal"
                  type="password"
                  class="validate form-control"
                  required
                />
                <label for="password-horizontal">Your password</label>
              </div>
            </div>
            <div class="step-actions">
              <button
                class="waves-effect waves-dark btn btn-sm btn-primary next-step"
                data-feedback="someFunction21"
              >
                CONTINUE
              </button>
              <button class="waves-effect waves-dark btn btn-sm btn-secondary previous-step">
                BACK
              </button>
            </div>
          </div>
        </li>
        <li class="step">
          <div class="step-title waves-effect waves-dark">Step 3</div>
          <div class="step-new-content">
            Finish!
            <div class="step-actions">
              <button
                class="waves-effect waves-dark btn-sm btn btn-primary m-0 mt-4"
                type="button"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Stepper;
