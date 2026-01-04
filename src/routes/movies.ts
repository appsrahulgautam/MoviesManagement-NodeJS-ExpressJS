import express from "express";

const movies = express.Router();

// *
//* Router means to create a sub folder containing many apis in itself
//* eg. domain.com/movies/getapi
// * domain.com/movies/putapi

movies.get("/", (req, res) => {
  res.json({
    message: "Movies router here with default get / path",
  });
});

movies.post("/", (req, res) => {
  res.json({
    message: "Movies router here with default put / path",
  });
});

movies.post("/helloput", (req, res) => {
  res.json({
    message: "Movies router here with default helloput / path",
  });
});

export default movies;
