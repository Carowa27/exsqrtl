import express from "express";
import {
  getAllOwnedCards,
  getOwnedCardById,
  createCard,
  getAllCards,
} from "../controllers/cardController.js";
const router = express.Router();

router.get("/", getAllCards);
router.get("/:userId", getAllOwnedCards);
router.get("/:cardId", getOwnedCardById);

// router.put("/cards/:cardId", updateAmountOfCard);

router.post("/", createCard);

// router.delete("/:cardId", deleteOwnedCardById);

export default router;