const ytdl = require("ytdl-core");
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req, res) {
  const videoURL = req.query.video;

  const info = await ytdl.getInfo(videoURL);
  res.status(200).json(info);
}
