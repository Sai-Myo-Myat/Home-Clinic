//importing components
import Nav from "../components/Nav";
import Main from "../components/Main";
import { ContextContainer } from "./context";
import { MainContextContainer } from "./dataBase";

const Layout = (props) => {
  return (
    <div className="h-[100vh]">
      <MainContextContainer>
        <ContextContainer>
          <Nav />
          <Main>{props.children}</Main>
        </ContextContainer>
      </MainContextContainer>
    </div>
  );
};

export default Layout;
