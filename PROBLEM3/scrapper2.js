const port = 3002;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
const webpage = [
  {
    webpageName: "Yahoo Sports",
    webaddress: "https://sports.yahoo.com/soccer/",
    base: "",
  },
  {
    webpageName: "ESPN",
    webaddress: "https://africa.espn.com/football/",
    base: "https://africa.espn.com",
  },
  {
    webpageName: "Livescore",
    webaddress: "https://www.livescore.com/en/news/football/",
    base: "https://www.livescore.com",
  },
];
const job = [];

webpage.forEach((webpage) => {
  axios
    .get(webpage.webaddress)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      $("a", html).each(function () {
        const title = $(this).text();
        const url = $(this).attr("href");
        const site = webpage.webpageName;
        job.push({
          title,
          site,
          url: webpage.base + url,
        });
      });
    })
    .catch((err) => console.log(err));
});

app.get("/", (req, res) => {
  res.json(job);
});

app.listen(port, (err) => {
  if (!err) {
    console.log(`The server is alive on port ${port}`);
  } else {
    console.log(err);
    throw err;
  }
});
