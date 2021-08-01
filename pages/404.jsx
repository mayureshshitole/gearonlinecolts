import Head from "next/head";
import Link from "next/link";
import NavBar from "./componentsofyt/NavBar";

const NotFound = () => {
  return (
    <>
      {" "}
      <Head>
        <title>GearOnlineColts</title>
        <meta
          name="description"
          content="Open Youtube video download website and enter the video’s URL to the corresponding field, at the top of the page. Click “Download” and you’ll see the list with all available links. Choose the desired format and get the file you need. That’s it, as simple as that! Download any YouTube video in high quality filtered by our algorithm. GearOnlineColts is the platform for all digital colts to make their life easy. We are trying to make digital tools to ease your load and try to focus on digital content creation."
        />
        <meta
          name="keywords"
          content="youtube, youtube video downloder, high quality, download youtube videos in high quality, gearonlinecolts,youtube.com"
        />{" "}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <NavBar />
      <div className=" flex flex-col justify-center items-center p-2">
        <Link href="/downloaders">
          <a>
            <button className=" flex justify-between items-center  text-white font-semibold uppercase px-5 py-2 my-5 rounded-lg w-full bg-gradient-to-r from-blue-500 to-purple-700  shadow-lg md:transform md:hover:scale-110 transition duration-500 ease-in-out">
              <h2 className="text-left">
                {" "}
                Check Out More Social Media Video Downloaders
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-w-14 w-14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </a>
        </Link>
        <Link href="/">
          <a className="flex flex-col justify-center items-center">
            <h1 className="text-blue-500 font-bold text-4xl animate-bounce">
              GOC
            </h1>
            <h1 className="text-2xl">OOOOOOPS! Page Not Found</h1>
          </a>
        </Link>
        <br />
        <div className="cursor-pointer">
          <Link href="/">
            <img
              src="/logoGOC.svg"
              width="300"
              height="300"
              alt="Logo image for www.gearonlinecolts.com"
              priority
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
