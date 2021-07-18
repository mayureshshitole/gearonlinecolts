const ytdl = require("ytdl-core");

export default async function getVideoInfo(req, res) {
  const videoURL = req.query.video;

  const info = await ytdl.getInfo(videoURL);
  res.status(200).json(info);
}

//"https://www.youtube.com/watch?v=I2ibI7MycUw"
