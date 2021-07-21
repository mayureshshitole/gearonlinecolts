import Link from "next/link";
import NavBar from "./componentsofyt/NavBar";

const PageNotFound = () => {
  return (
    <>
      <NavBar />
      <div className="h-screen w-screen flex justify-center items-center">
      
        <Link href="/">
          <a className="flex flex-col justify-center items-center">
            <h1 className="text-blue-500 font-bold text-5xl animate-bounce">GOC</h1>
            <h1 className="text-2xl">OOOOOOPS! Page Not Found</h1>
          </a>
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
