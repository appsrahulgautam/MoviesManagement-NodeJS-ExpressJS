import express from "express";

const auth = express.Router();

auth.get("/", (req, res) => {
  res.json({
    message: "You are in auth router in default path / ",
  });
});

auth.put("/update", (req, res) => {
  res.json({
    message: "You are in auth rourer with update path put",
  });
});

export default auth;
