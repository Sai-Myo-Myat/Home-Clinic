const Main = (props) => {
  return (
    <div className="h-[90vh] flex flex-col justify-around items-center bg-[#1D5353] p-2 position-relative">
      {props.children}
    </div>
  );
};

export default Main;
