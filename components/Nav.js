import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-blue-500 text-white text-wihte flex justify-around">
      <Link href="/" passHref>
        <h1 className="py-4 ">Home</h1>
      </Link>
      <ul className="py-4 ">
        <li> Q&A</li>
      </ul>
    </nav>
  );
};

export default Nav;
