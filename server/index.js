import express from "express";
import fs from "fs";
import path from "path";
import ReactDOMServer from "react-dom/server";

import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import App from "../src/App";

const statsFile = path.resolve("./build/loadable-stats.json");
const extractor = new ChunkExtractor({ statsFile });

const jsx = extractor.collectChunks(<App />);

const app = express();
const html = fs.readFileSync(path.resolve("./build/index.html"), "utf-8");

app.get("/", (req, res) => {
  const renderString = ReactDOMServer.renderToString(jsx);

  console.log(renderString);
  res.set("content-type", "text/html");
  res.send(
    html.replace('<div id="root"></div>', <div id="root">${renderString}</div>)
  );
});

app.use("/", express.static("build"));

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
