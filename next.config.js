module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["i.ytimg.com", "yt3.ggpht.com", "https://youtube.com"],
    loader: "imgix",
    path: "",
  },
  target: "serverless",
  trailingSlash: true,
};
