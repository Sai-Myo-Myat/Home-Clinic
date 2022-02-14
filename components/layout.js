//importing components
import Nav from "../components/Nav";
import Main from "../components/Main";
import { ContextContainer } from "./context";
import { MainContextContainer } from "./dataBase";
import { BookingTimesContainer } from "./bookingTimes";

const Layout = (props) => {
  return (
    <div className="h-[100vh]">
      <MainContextContainer>
        <ContextContainer>
          <BookingTimesContainer>
            <Nav />
            <Main>{props.children}</Main>
          </BookingTimesContainer>
        </ContextContainer>
      </MainContextContainer>
    </div>
  );
};

export default Layout;
