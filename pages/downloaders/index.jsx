import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Loading from "../componentsofyt/Loading";
import axios from "axios";
import VideoDetails from "../componentsofyt/VideoDetails";
import NavBar from "../componentsofyt/NavBar";
import HowToDownload from "../blogs/How-To-Download-Youtube-Video";
import Footer from "../componentsofyt/Footer";
import FBvideo from "../componentsofyt/FBvideo";
import Link from "next/link";

export default function Home() {
  const [videoURL, setVideoURL] = useState("");
  const [fbVideo, setfbVideo] = useState();
  const [loading, setLoading] = useState(false);

  const handleViedoInfo = async () => {
    setLoading(true);

    if (videoURL) {
      const { data } = await axios.get(`/api/fbvideo?video=${videoURL}`);
      setfbVideo(data);
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />

      <div className="flex flex-col space-y-10 justify-center items-center pt-10 md:pt-20 px-2">
        <Head>
          <title>
            Facebook Downloader - Download Facebook videos for free!
          </title>
          <meta
            name="description"
            content="Open Facebook video download website and enter the video’s URL to the corresponding field, at the top of the page. Click “Download” and you’ll see the list with all available links. Choose the desired format and get the file you need. That’s it, as simple as that! Download any Facebook video in high quality filtered by our algorithm. GearOnlineColts is the platform for all digital colts to make their life easy. We are trying to make digital tools to ease your load and try to focus on digital content creation."
          />
          <meta
            name="keywords"
            content="facebook, facebook video downloder, high quality, download facebook videos in high quality, gearonlinecolts,facebook.com ,goc"
          />{" "}
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
        </Head>
        <h1 className="text-2xl md:text-4xl font-semibold text-center">
          Free Social Media Video Dowloaders!
        </h1>
        <main className="relative flex flex-col md:flex-row justify-center  md:justify-between  items-center w-full md:max-w-5xl mx-auto ">
          <Link href="/downloaders/YouTube-video-downloader-free">
            <a>
              <div className="p-5 border-4 rounded-xl flex flex-col justify-center items-center mt-2 md:mt-5 cursor-pointer shadow-lg md:shadow-xl">
                <img
                  src={"/yt.png"}
                  alt={
                    "click on this to download youtube videos in high quality for free"
                  }
                  className="h-40 w-40 "
                />
                <h1 className="text-center font-semibold text-lg md:text-2xl ">
                  Free Youtube video Downloader
                </h1>
              </div>
            </a>
          </Link>
          <Link href="/downloaders/Facebook-video-downloader-free">
            <a>
              <div className="p-5 border-4 rounded-xl flex flex-col justify-center items-center mt-2 md:mt-5 cursor-pointer shadow-lg md:shadow-xl">
                <img
                  src={"/fb.png"}
                  alt={
                    "click on this to download youtube videos in high quality for free"
                  }
                  className="h-40 w-40 "
                />
                <h1 className="text-center font-semibold text-lg md:text-2xl ">
                  Free Facebook video Downloader
                </h1>
              </div>
            </a>
          </Link>
        </main>
        <h2 className="text-lg md:text-xl font-semibold ">
          Steps to Download:
        </h2>
        <p className="text-base font-light leading-relaxed  text-gray-700 md:max-w-3xl">
          Go to whichever Social Media Videos you want download and paste the
          link of your video, then you will get downloading options. That's it,
          so simple right? If you like our service don't forget to share website
          link with your friends.!!!
        </p>
        <Footer />
      </div>
    </>
  );
}
