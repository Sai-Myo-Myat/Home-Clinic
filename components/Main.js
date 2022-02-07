const Main = (props) => {
  return (
    <div className="h-[90vh] bg-blue-300 position-relative">
      {props.children}
    </div>
  );
};

export default Main;
