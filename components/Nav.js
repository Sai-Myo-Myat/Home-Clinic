import Link from "next/link";
import { useContext } from "react";
//importing components
import { contextProvider } from "./context";

const Nav = () => {
  const [allInformation, setAllInformation] = useContext(contextProvider);
  return (
    <nav className="bg-[#BFFFF0] text-[#FFBBBB] flex justify-between border-box ">
      <Link href="/" passHref>
        <h1 className="p-3 text-2xl m-0 cursor-pointer">Home</h1>
      </Link>
      <ul className=" flex justify-around items-center w-50 py-3 p-0 m-0 ">
        <li className=" m-0 cursor-pointer"> Q&A</li>
        <div className={`position-relative w-10 h-10 flex items-center`}>
          {" "}
          <Link passHref href={"/profile"}>
            <i aria-hidden className="fa-duotone fa-book"></i>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
