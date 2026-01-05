import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  addToWatchlist,
  removeFromWatchlist,
  updateWatchlistItem,
} from "../controllers/watchlistController";
import { validateRequest } from "../middleware/validateRequest";
import { addToWatchlistSchema } from "../validators/watchlistValiidators";

const router = express.Router();

router.use(authMiddleware);

router.post("/", validateRequest(addToWatchlistSchema), addToWatchlist);

// {{baseUrl}}/watchlist/:id
router.put("/:id", updateWatchlistItem);

// {{baseUrl}}/watchlist/:id
router.delete("/:id", removeFromWatchlist);

export default router;
