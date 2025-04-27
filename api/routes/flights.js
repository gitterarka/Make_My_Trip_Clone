import express from "express";
import {
  createFlight,
  updateFlight,
  deleteFlight,
  getFlight,
  getFlights,
  countByCity,
  countByAirline,
  countByPlaces
} from "../controllers/flight.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createFlight);

// UPDATE
router.put("/:id", verifyAdmin, updateFlight);

// DELETE
router.delete("/:id", verifyAdmin, deleteFlight);

// GET ONE
router.get("/find/:id", verifyUser, getFlight);

// GET ALL
router.get("/", verifyUser, getFlights);

// COUNT BY CITY
router.get("/countByCity", countByCity);

// COUNT BY AIRLINE
router.get("/countByAirline", countByAirline);
// COUNT BY PLACE (Destination)
router.get("/countByPlaces", countByPlaces);


export default router;
