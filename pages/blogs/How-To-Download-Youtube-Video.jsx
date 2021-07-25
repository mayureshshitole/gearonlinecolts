import Image from "next/image";
const HowToDownload = () => {
  return (
    <div className="flex flex-col space-y-10 justify-center items-center pt-10 md:pt-20 px-2">
      <h1 className="text-xl font-semibold md:text-3xl ">
        How to Download any YouTube Video in best quality!
      </h1>
      <div className="sm:max-w-5xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-xl md:text-2xl">Step 1: Paste video URL/Link</h2>
        <p className="text-base font-light leading-relaxed mt-0 mb-4 text-gray-700 md:max-w-3xl">
          In order to download any youtube video first of all you have to click <a href="/" target="_blank" className="text-blue-500">www.gearonlinecolts.com</a>
          You will get Home page where you have to paste your YouTube.com Video Url/Link. So Paste it as shown in Image.
        </p>
        <Image
          src="/step1.png"
          width={500}
          height={300}
          layout="intrinsic"
          alt="How to download youtube video step1 image on www.gearonlinecolts.com"
        />
      </div>
      <div className="sm:max-w-5xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-xl md:text-2xl">Step 2: Click on "GET VIDEO"</h2>
        <p className="text-base font-light leading-relaxed mt-0 mb-4 text-gray-700 md:max-w-3xl">
          After Pasting YouTube video URL/Link you have to click on "Get Video Button". After clicking it will take few seconds to load youtube video with its all Information.
        </p>
        <Image
          src="/step2.png"
          width={500}
          height={300}
          layout="intrinsic"
          alt="How to download youtube video step2 image on www.gearonlinecolts.com"
        />
      </div>
      <div className="sm:max-w-5xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-xl md:text-2xl">Step 3: Scroll Down</h2>
        <p className="text-base font-light leading-relaxed mt-0 mb-4 text-gray-700 md:max-w-3xl">
         After Loading finished you will get your desired video with its Title, Thumbnail, Description and channel details. Just confirm it's and SCOLL DOWN to bottom for getting bets quality download options.
        </p>
        <Image
          src="/step3.png"
          width={500}
          height={300}
          layout="intrinsic"
          alt="How to download youtube video step3 image on www.gearonlinecolts.com"
        />
      </div>
      <div className="sm:max-w-5xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-xl md:text-2xl">Step 4: Click on Quality you want</h2>
        <p className="text-base font-light leading-relaxed mt-0 mb-4 text-gray-700 md:max-w-3xl">
          Now Click on whichever format you want to download your video. then Downloading will start in few seconds
        </p>
        <Image
          src="/step4.png"
          width={500}
          height={300}
          layout="intrinsic"
          alt="How to download youtube video step4 image on www.gearonlinecolts.com"
        />
      </div>
      <div className="sm:max-w-5xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-xl md:text-2xl">Step 5: Done!!!</h2>
        <p className="text-base font-light leading-relaxed mt-0 mb-4 text-gray-700 md:max-w-3xl">
          That's it!!!! You have successfully downloaded your YouTube video in best quality . Now Enjoy your Video!!! 
        </p>
      </div>
      <div className="h-10"></div>
    </div>
  );
};

export default HowToDownload;
