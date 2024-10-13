const express = require("express");
const fs = require("fs");

if (!process.env.PORT) {
  throw new Error(
    "Please specify the port number for the HTTP server with the environment variable PORT."
  );
}

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/video", async (req, res) => {
  const videoPath = "./videos/SampleVideo_1280x720_1mb.mp4";
  const stats = await fs.promises.stat(videoPath);

  res.writeHead(200, {
    "Content-Length": stats.size,
    "Content-Type": "video/mp4",
  });
  fs.createReadStream(videoPath).pipe(res);
});

app.listen(PORT, () => {
  console.log(
    `Microservice listening on port ${PORT}, point your browser at http://localhost:${PORT}/video`
  );
});
