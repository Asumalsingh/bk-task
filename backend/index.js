import express from "express";
const app = express();
import { config } from "dotenv";
config();
import cors from "cors";
import connectDB from "./db.js";
import dataModel from "./models/dataModel.js";

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
connectDB();

app.get("/", (req, res) => {
  res.send("We are live ✨✨");
});

// Api to get all blogs list
app.get("/getData", async (req, res) => {
  const page = parseInt(req.query.page);
  let pageSize = 20;
  const { endYear, topic, sector, region, pestle, source, country } = req.query;

  // Filters
  let filter = {};
  if (endYear) filter.end_year = { $in: endYear };
  if (topic) {
    filter.topic = { $in: topic };
  }
  if (sector) {
    filter.sector = { $in: sector };
  }
  if (region) {
    filter.region = { $in: region };
  }
  if (pestle) {
    filter.pestle = { $in: pestle };
  }
  if (source) {
    filter.source = { $in: source };
  }
  if (country) {
    filter.country = { $in: country };
  }

  try {
    const result = await dataModel
      .find({
        $and: [filter],
      })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    const totalCount = await dataModel.countDocuments({
      $and: [filter],
    });

    const totalPages = Math.ceil(totalCount / pageSize);

    res.status(200).send({ totalPage: totalPages, result });
  } catch (error) {
    res.status(500).send(error);
  }
});

// API to get single blog post
app.get("/getbyTitle/:title", async (req, res) => {
  const { title } = req.params;
  try {
    const blog = await dataModel.findOne({ title });
    res.send(blog);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
