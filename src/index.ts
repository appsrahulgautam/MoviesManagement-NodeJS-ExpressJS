import express, { Request, Response } from "express";
import movies from "./routes/movies";
import auth from "./routes/auth";
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./config/db";
import router from "./routes/watchlistRoutes";

config();
connectDB(); // * <— prisma

const app = express();
const PORT = 5001;

//* body parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//*
///* ---------    API ROUTES HERE
//
app.use("/movies", movies);
app.use("/auth", auth);
app.use("/watchlist", router);

//
///* ---------    API ROUTES HERE
//*

const server = app.listen(PORT, () => {
  console.log("Server running perfectly on PORT 5001");
});

//
//
//* Some errors happens and we need to catch all those
//* keep these all the time to do so
//* Handle unhandled promise rejections
// * (e.g., database connection errors)

//! unhandledRejection
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

//! Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);
  await disconnectDB();
  process.exit(1);
});

//! Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});
