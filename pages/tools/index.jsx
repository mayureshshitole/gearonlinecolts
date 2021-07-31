import Head from "next/head";
import NavBar from "../componentsofyt/NavBar";

const ToolsIndex = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col space-y-10 justify-center items-center pt-10 md:pt-20 px-2">
        <Head>
          <title>URL Shortener - Free URL Shortener with Analytics!</title>
          <meta
            name="description"
            content="Free URl Shortener for marketing your products or any other services. Long URLs are so unprofessionals thats why you must hsorten your URLs to get more conversions and clicks on it. This ShortyUrl Tool will helps you to get best blazing fast URL redirects to your website and also free analytics to track your shortened URL performance. GearOnlineColts is the platform for all digital colts to make their life easy. We are trying to make digital tools to ease your load and try to focus on digital content creation."
          />
          <meta
            name="keywords"
            content="URL, url, Shortener, url shortener, free url shortner, url shortener analytics, analytics, affiliate marketing, marketing, gearonlinecolts,goc"
          />{" "}
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
        </Head>
        <h1 className="text-2xl md:text-4xl font-semibold ">
          Free URL Shortener with Analytics
        </h1>
        <main className="relative flex flex-col justify-center items-center w-full md:w-1/3 mx-auto ">
          <div className="card bg-blue-500 shadow-lg   w-full h-full rounded-3xl absolute  transform -rotate-3"></div>
          <div className="card bg-purple-700 shadow-lg   w-full h-full rounded-3xl absolute  transform rotate-3"></div>

          <div className="relative w-full rounded-3xl  px-6 py-4 bg-white shadow-md border-2 border-gray-300">
            <h1 className="text-3xl font-semibold ">
              GOC's{" "}
              <a href="/" className="text-blue-500 text-4xl">
                ShortyUrl!
              </a>
            </h1>

            <p className="text-gray-700">Paste Your Long URL here!</p>

            <div className="relative w-full mt-5">
              <input
                className="peer z-10  h-10 w-full focus:outline-none border-b-2 border-gray-300 placeholder-transparent"
                type="text"
                placeholder="URL"
              />
              <label className="absolute -top-3 right-0 text-gray-600 text-xs peer-placeholder-shown:text-base peer-focus:-top-3  peer-focus:text-gray-600 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all">
                Long URL
              </label>
            </div>
            <br />
            <button
              className="text-white font-semibold uppercase px-10 py-2 rounded-lg w-full bg-gradient-to-r from-blue-500 to-purple-700  shadow-lg transform hover:scale-110 transition duration-500 ease-in-out"
              required
            >
              Short It
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default ToolsIndex;
