import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="sm:max-w-7xl mx-auto flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-700  shadow-md rounded-b-lg md:rounded-b-2xl p-2">
      <Link href="/">
        <a>
          <h1 className="text-white font-semibold text-3xl">GOC</h1>
        </a>
      </Link>
    </nav>
  );
};

export default NavBar;
