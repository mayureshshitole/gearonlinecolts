import Image from "next/image";
import { useEffect, useState } from "react";

const VideoDetails = ({ videoData }) => {
  const [formats, setFormats] = useState([]);

  useEffect(() => {
    setFormats(videoData.formats);
  }, [videoData]);

  const handleDownload = async (itag) => {
    await window.open(
      `/api/ytdownload?itag=${itag}&video=${videoData.videoDetails.video_url}`,
      "_self"
    );
  };

  if (!videoData) {
    return <h1>No Data Found</h1>;
  }

  return (
    <>
      {" "}
      <div className="px-3 py-5 w-full sm:max-w-5xl mx-auto border-2 border-blue-500 rounded-2xl shadow-lg space-y-2">
        <div className="flex">
          {" "}
          <Image
            src={
              videoData.videoDetails.author.thumbnails[
                videoData.videoDetails.author.thumbnails.length - 1
              ].url
            }
            alt={`Channel profile picture for YouTube Channel "${videoData.videoDetails.author.name}"`}
            width={50}
            height={50}
            layout="intrinsic"
            className="rounded-full border-2 border-blue-500"
          />
          <div >
            <h1 className="text-lg font-semibold">
              <a
                href={videoData.videoDetails.author.channel_url}
                target="_blank"
              >
                {videoData.videoDetails.author.name}
              </a>
            </h1>
            <h4 className="text-gray-700">
              Subscribers: {videoData.videoDetails.author.subscriber_count}
            </h4>
          </div>
        </div>
        <Image
          src={
            videoData.videoDetails.thumbnails[
              videoData.videoDetails.thumbnails.length - 1
            ].url
          }
          alt={`Video Thumbnail for video "${videoData.videoDetails.title}" of "${videoData.videoDetails.author.name}"`}
          width={500}
          height={300}
          layout="intrinsic"
          className="rounded-lg  "
        />
        <h1 className="text-2xl font-semibold">
          {videoData.videoDetails.title}
        </h1>

        <p className="text-gray-700 text-base overflow-x-scroll scrollbar-hide">
          {videoData.videoDetails.description}
        </p>
        <h2 className="text-lg font-semibold">
          Best quality Downloadable formats of this video:
        </h2>
        <div className="flex justify-center items-center space-x-1 max-w-5xl mx-auto overflow-x-scroll scrollbar-hide py-5">
          {formats.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-500 to-purple-700 rounded-xl shadow-lg transform hover:scale-110 active:bg-blue-400 transition duration-500 ease-in-out"
              >
                {item.hasAudio == true && item.hasVideo == true && (
                  <button
                    className="p-3 text-white font-semibold "
                    onClick={() => handleDownload(item.itag)}
                  >
                    <p>Donwload in</p>
                    <p>{item.qualityLabel}</p>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1>Watch this again!</h1>
        <iframe src={videoData.videoDetails.embed.iframeUrl}></iframe>
      </div>
      <div className="h-10"></div>
    </>
  );
};

export default VideoDetails;
//https://gearonlinecolts.vercel.app/api/
