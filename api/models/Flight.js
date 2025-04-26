// import mongoose from "mongoose";
// const FlightSchema = new mongoose.Schema(
//     {
//     flightNumber: {
//         type: String,
//         required: true,
//         unique: true
//       },
//       airline: {
//         type: String,
//         required: true
//       },
//       from: {
//         type: String,
//         required: true
//       },
//       to: {
//         type: String,
//         required: true
//       },
//       departureTime: {
//         type: Date,
//         required: true
//       },
//       arrivalTime: {
//         type: Date,
//         required: true
//       },
//       duration: {
//         type: String,
//         required: true
//       },
//       price: {
//         type: Number,
//         required: true
//       },
//       seatsAvailable: {
//         type: Number,
//         required: true
//       },
//       seatType: {
//         type: String,
//         enum: ["Economy", "Business", "First"],
//         required: true
//       },
//       status: {
//         type: String,
//         enum: ["Scheduled", "Cancelled", "Delayed"],
//         default: "Scheduled"
//       },
//     },
//     { timestamps: true }
// );

// export default mongoose.model("Flight", FlightSchema)