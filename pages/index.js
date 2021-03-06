import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Loading from "./componentsofyt/Loading";
import axios from "axios";
import VideoDetails from "./componentsofyt/VideoDetails";
import NavBar from "./componentsofyt/NavBar";
import HowToDownload from "./blogs/How-To-Download-Youtube-Video";
import Footer from "./componentsofyt/Footer";
import Link from "next/link";
import { useToasts } from "react-toast-notifications";

export default function Home() {
  const [videoURL, setVideoURL] = useState("");
  const [videoData, setVideoData] = useState();
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();

  const handleViedoInfo = async () => {
    try {
      if (videoURL !== undefined || videoData !== null) {
        setLoading(true);
        if (
          videoURL.substring(0, 8) === "https://" ||
          videoURL.substring(0, 7) === "http://" ||
          videoURL.substring(0, 19) === "https://www.youtube.com" ||
          videoURL.substring(0, 18) === "http://www.youtube.com"
        ) {
          const { data } = await axios.get(`/api/ytinfo?video=${videoURL}`);
          setVideoData(data);
          setLoading(false);
        } else {
          addToast("Invalid URL", { appearance: "error" });
          setLoading(false);
        }
      } else {
        addToast("Something Went Wrong", { appearance: "error" });
      }
    } catch (err) {
      addToast(err, { appearance: "error" });
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col space-y-10 justify-center items-center pt-10 md:pt-20 px-2">
        <Head>
          <title>YouTube Downloader - Download Youtube videos for free!</title>
          <meta
            name="description"
            content="Open  Youtube video download website and enter the video’s URL to the corresponding field, at the top of the page. Click “Download” and you’ll see the list with all available links. Choose the desired format and get the file you need. That’s it, as simple as that! Download any YouTube video in high quality filtered by our algorithm. GearOnlineColts is the platform for all digital colts to make their life easy. We are trying to make digital tools to ease your load and try to focus on digital content creation."
          />
          <meta
            name="keywords"
            content="youtube, youtube video downloder, high quality, download youtube videos in high quality, gearonlinecolts,youtube.com ,goc"
          />{" "}
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
        </Head>
        <Link href="/downloaders">
          <a>
            <button className=" flex justify-between items-center  text-white font-semibold uppercase px-5 py-2 rounded-lg w-full bg-gradient-to-r from-blue-500 to-purple-700  shadow-lg md:transform md:hover:scale-110 transition duration-500 ease-in-out">
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
        <h1 className="text-2xl md:text-4xl font-semibold ">
          Youtube Video Downloader
        </h1>
        <main className="relative flex flex-col justify-center items-center w-full md:w-1/3 mx-auto ">
          <div className="card bg-blue-500 shadow-lg   w-full h-full rounded-3xl absolute  transform -rotate-3"></div>
          <div className="card bg-purple-700 shadow-lg   w-full h-full rounded-3xl absolute  transform rotate-3"></div>

          <div className="relative w-full rounded-3xl  px-6 py-4 bg-white shadow-md border-2 border-gray-300">
            <h1 className="text-3xl font-semibold ">
              GOC's{" "}
              <a href="/" className="text-blue-500 text-4xl">
                YTmate!
              </a>
            </h1>

            <p className="text-gray-700">Paste YouTube video URL</p>

            <div className="relative w-full mt-5">
              <input
                className="peer z-10  h-10 w-full focus:outline-none border-b-2 border-gray-300 placeholder-transparent"
                type="text"
                placeholder="URL"
                onChange={(e) => setVideoURL(e.target.value)}
              />
              <label className="absolute -top-3 right-0 text-gray-600 text-xs peer-placeholder-shown:text-base peer-focus:-top-3  peer-focus:text-gray-600 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all">
                YouTube Video URL
              </label>
            </div>
            <br />
            <button
              className="text-white font-semibold uppercase px-10 py-2 rounded-lg w-full bg-gradient-to-r from-blue-500 to-purple-700  shadow-lg transform hover:scale-110 transition duration-500 ease-in-out"
              required
              onClick={() => handleViedoInfo()}
            >
              Get Video
            </button>
          </div>
        </main>
        {loading && <Loading />}
        {videoData && <VideoDetails videoData={videoData} />}
        <HowToDownload />
        <Footer />
      </div>
    </>
  );
}
