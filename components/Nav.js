import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-blue-500 text-white flex justify-between border-box ">
      <Link href="/" passHref>
        <h1 className="p-3 text-xl m-0 cursor-pointer">Home</h1>
      </Link>
      <ul className=" flex justify-around items-center w-50 py-3 p-0 m-0 ">
        <li className=" m-0 cursor-pointer"> Q&A</li>
        <Link passHref href={"/profile"}>
          <i
            aria-hidden
            className="cursor-pointer text-2xl text-gray-300 fas fa-user"
          ></i>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
