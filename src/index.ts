import express, { Request, Response } from "express";
import movies from "./routes/movies";
import auth from "./routes/auth";

const app = express();
const PORT = 5001;

//*
///* API ROUTES HERE
//
app.use("/movies", movies);
app.use("/auth", auth);
//
///* API ROUTES ENDS HERE
//*

app.listen(PORT, () => {
  console.log("Server running perfectly on PORT 5001");
});

app.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "You have successfully connected to get request",
  });
});
