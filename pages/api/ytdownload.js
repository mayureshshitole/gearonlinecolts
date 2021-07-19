const ytdl = require("ytdl-core");
import { NextApiRequest, NextApiResponse } from "next";

export default function downloadVideo(req, res) {
  const videoURL = req.query.video;
  const itag = req.query.itag;
  console.log(videoURL);
  res.setHeader(
    "Content-Disposition",
    'attachment; filename="YT-Video-Downloaded-GOC.mp4"'
  );

  ytdl(videoURL, {
    filter: (format) => format.itag == itag,
  }).pipe(res);
}
