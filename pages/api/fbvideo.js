const fb = require("fb-video-downloader");

export default async function fbdownload(req, res) {
  const videoURL = req.query.video;

  const info = await fb.getInfo(videoURL);
  console.log(info);
  res.status(200).json(info);
}
