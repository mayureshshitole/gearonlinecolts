import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="sm:max-w-7xl mx-auto  md:space-x-5 bg-gradient-to-r from-blue-500 to-purple-700  shadow-md rounded-b-xl md:rounded-b-2xl p-2">
      <Link href="/">
        <a>
          <div className="flex justify-start md:justify-center items-center space-x-3">
            {" "}
            <div className="bg-white rounded-full p-1 flex justify-center items-center cursor-pointer">
              <img
                src="/logoGOC.svg"
                width="50"
                height="50"
                alt="Logo image for www.gearonlinecolts.com"
                priority
              />
            </div>
            <h1 className="text-white font-semibold text-2xl md:text-3xl">
              GOC
            </h1>
          </div>
        </a>
      </Link>
    </nav>
  );
};

export default NavBar;
