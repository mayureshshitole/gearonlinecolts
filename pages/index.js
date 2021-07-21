import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Loading from "./componentsofyt/Loading";
import axios from "axios";
import VideoDetails from "./componentsofyt/VideoDetails";
import NavBar from "./componentsofyt/NavBar";

export default function Home() {
  const [videoURL, setVideoURL] = useState("");
  const [videoData, setVideoData] = useState();
  const [loading, setLoading] = useState(false);

  const handleViedoInfo = async () => {
    setLoading(true);

    if (videoURL) {
      const { data } = await axios.get(`/api/ytinfo?video=${videoURL}`);
      setVideoData(data);
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />

      <div className="flex flex-col space-y-10 justify-center items-center pt-10 md:pt-20 px-2">
        <Head>
          <title>YouTube Video Downloader | GearOnlineColts</title>
          <meta
            name="description"
            content="Download any YouTube video in high quality filtered by our algorithm. GearOnlineColts is the platform for all digital colts to make there life easy. We are trying to make digital tools to ease your load and try to focus on digital content creation."
          />
          <meta
            name="keywords"
            content="youtube, youtube video downloder, high quality, download youtube videos in high quality, gearonlinecolts,youtube.com"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="relative flex flex-col justify-center items-center w-full md:w-1/3 mx-auto ">
          <div className="card bg-blue-500 shadow-lg   w-full h-full rounded-3xl absolute  transform -rotate-3"></div>
          <div className="card bg-purple-700 shadow-lg   w-full h-full rounded-3xl absolute  transform rotate-3"></div>

          <div className="relative w-full rounded-3xl  px-6 py-4 bg-white shadow-md border-2 border-gray-300">
            <h1 className="text-3xl font-semibold ">
              GOC's{" "}
              <a href="https://nextjs.org" className="text-blue-500 text-4xl">
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
      </div>
    </>
  );
}
