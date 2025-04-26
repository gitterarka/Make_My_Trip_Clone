// import express from "express";
// import Flight from "../models/Flight.js";
// // import {
// //   createFlight,
// //   deleteFlight,
// //   getFlight,
// //   getFlights,
// //   updateFlight,
// //   updateRoomAvailability,
// // } from "../controllers/flight.js";
// // import { verifyAdmin } from "../utils/verifyToken.js";

// const router = express.Router();
// //CREATE
// router.post("/", async (req,res) => {

//     const newFlight = new Flight(req.body)
//     try{
//         const savedFlight = await newFlight.save()
//         res.status(200).json(savedFlight)
//     }catch(err){
//         res.status(500).json(err)
//     }

// })
// router.put("/:id", async (req, res) => {
//     try {
//       const updatedFlight = await Flight.findByIdAndUpdate(
//         req.params.id,
//         { $set: req.body },
//         { new: true }
//       );
//       res.status(200).json(updatedFlight);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
// // router.put("/:id", verifyAdmin, updateRoom);
// // //DELETE
// // router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
// // //GET

// // router.get("/:id", getRoom);
// // //GET ALL

// // router.get("/", getRooms);

// export default router;