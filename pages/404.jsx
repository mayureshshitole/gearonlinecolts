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
      <div className="h-screen w-screen flex flex-col justify-center items-center p-2">
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
              width="350"
              height="350"
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
