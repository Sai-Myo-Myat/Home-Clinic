import Link from "next/link";
import { useContext } from "react";
//importing components
import { contextProvider } from "./context";

const Nav = () => {
  const [allInformation, setAllInformation, number, setNumber] =
    useContext(contextProvider);
  return (
    <nav className="bg-blue-500 text-white flex justify-between border-box ">
      <Link href="/" passHref>
        <h1 className="p-3 text-xl m-0 cursor-pointer">Home</h1>
      </Link>
      <ul className=" flex justify-around items-center w-50 py-3 p-0 m-0 ">
        <li className=" m-0 cursor-pointer"> Q&A</li>
        <div className={`position-relative w-10 h-10 flex items-center`}>
          {" "}
          <Link passHref href={"/profile"}>
            <i
              aria-hidden
              className="cursor-pointer text-2xl text-gray-300 fas fa-user"
            ></i>
          </Link>
          {/* <div className="w-5  h-5 flex items-center justify-center text-blue-500 position-absolute top-0 right-0 rounded-full bg-blue-200">
            {number}
          </div> */}
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
