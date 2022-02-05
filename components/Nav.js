import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-blue-500 text-white flex justify-around border-box ">
      <Link href="/" passHref>
        <h1 className="p-3 text-xl m-0 cursor-pointer">Home</h1>
      </Link>
      <ul className="py-3 p-0 m-0 ">
        <li className="self-center m-0 cursor-pointer"> Q&A</li>
      </ul>
    </nav>
  );
};

export default Nav;
