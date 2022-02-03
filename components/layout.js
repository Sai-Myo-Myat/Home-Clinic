//importing components
import Nav from "../components/Nav";
import Main from "../components/Main";

const Layout = (props) => {
  return (
    <div className="h-[100vh]">
      <Nav />
      <Main>{props.children}</Main>
    </div>
  );
};

export default Layout;
