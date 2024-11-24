import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import { getReelData, getReelDataFAKE } from "./helper.js";

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("yes");
});
app.get("/ping", (req, res) => {
  return res.send("PONG!");
});

console.log("lll");
// app.get("/api/scrap/ig", async (req, res) => {
//   const { url, test } = req.query;

//   if (!url) {
//     return res.status(400).json({ message: "Url is Missing!" });
//   }
//   // TEST
//   if (test === "TRUE") {
//     const data = getReelDataFAKE();
//     return res.json(data);
//   }

//   // GET REEL DATA
//   const data = await getReelData(url);
//   // INCREMENT THE TOTAL DOWNLOAD COUNT
//   return res.json({
//     message: "scraping completed successfully",
//     data: { ...data, test: false },
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// ruhend-scraper
