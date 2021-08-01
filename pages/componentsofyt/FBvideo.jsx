const FBvideo = ({ fbVideo }) => {
  if (!fbVideo) {
    return <h1>No Data Found</h1>;
  }

  return (
    <>
      {" "}
      <div className="px-3 py-5 w-full sm:max-w-5xl mx-auto border-2 border-blue-500 rounded-2xl shadow-lg space-y-2">
        <h1 className="text-2xl font-semibold">{fbVideo.title}</h1>

        <div className="flex flex-col md:flex-row  md:justify-between my-5">
          <div>
            <h1 className="text-lg font-semibold">
              Download video in High Quality
            </h1>
            <video width="320" height="240" controls>
              <source src={fbVideo.download.hd} type="video/mp4" />
            </video>
          </div>
          <div>
            <h1 className="text-lg font-semibold">
              Download video in Normal Quality
            </h1>
            <video width="320" height="240" controls>
              <source src={fbVideo.download.sd} type="video/mp4" />
            </video>
          </div>
        </div>
        <h2 className="text-lg md:text-xl font-semibold">Steps to Download:</h2>

        <p className="text-base font-light leading-relaxed mt-3 mb-4 text-gray-700 md:max-w-3xl">
          Whichever Video Quality you like, just click on Three Dots and then
          click on download. Thats it, if you like our service please share the
          website link and come back again.
        </p>
      </div>
      <a href="/" target="_blank">
        <button
          className="text-white font-semibold uppercase px-10 py-2 rounded-lg  bg-gradient-to-r from-blue-500 to-purple-700  shadow-lg transform hover:scale-110 transition duration-500 ease-in-out"
          required
        >
          Download Another Video
        </button>
      </a>
      <div className="h-10"></div>
    </>
  );
};

export default FBvideo;
