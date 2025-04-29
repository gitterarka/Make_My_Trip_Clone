import { useEffect, useState } from "react";
import { FaPlaneArrival } from "react-icons/fa";
import axios from "axios";
import "./flightAdmin.css";

const FlightAdmin = () => {
  const [flights, setFlights] = useState([]);
  const [newFlight, setNewFlight] = useState({
    flightNumber: "",
    airline: "",
    from: "",
    to: "",
    departureTime: "",
    arrivalTime: "",
    duration: "",
    price: 0,
    seatsAvailable: 0,
    seatType: "Economy",
    status: "Scheduled",
  });

  const fetchFlights = async () => {
    try {
      const res = await axios.get("/api/flights");
      setFlights(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const handleChange = (e) => {
    setNewFlight((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreate = async () => {
    try {
      await axios.post("/api/flights", newFlight);
      fetchFlights();
      alert("Flight Created Successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to create flight.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/flights/${id}`);
      fetchFlights();
      alert("Flight Deleted Successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete flight.");
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`/api/flights/${id}`, {
        status: "Cancelled", // Example: Cancel flight
      });
      fetchFlights();
      alert("Flight Updated Successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update flight.");
    }
  };

  return (
    <div className="flightAdminContainer">
      <h1>
        <FaPlaneArrival style={{ fontSize: "1em", color: "white", marginRight: "12px" }} />
        Manage Flights
      </h1>

      <div className="flightForm">
        <h3>Create New Flight:</h3>

        <div className="formColumns">
          {Object.keys(newFlight).map((field) => (
            field !== "status" && field !== "seatsAvailable" && field !== "price" && (
              <div key={field}>
                <label>{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}:</label>
                <input
                  type={field === "price" || field === "seatsAvailable" ? "number" : "text"}
                  name={field}
                  placeholder={`Eg : ${field.charAt(0).toUpperCase() + field.slice(1)}`} 
                  value={newFlight[field]}
                  onChange={handleChange}
                />
              </div>
            )
          ))}
        </div>

        <button onClick={handleCreate}>Create Flight</button>
      </div>

      <div className="flightList">
        <h3>All Flights:</h3>
        {flights.map((flight) => (
          <div key={flight._id} className="flightItem">
            <div>
              <p><strong>{flight.flightNumber}</strong> - {flight.from} -> {flight.to}</p>
              <p>Airline: {flight.airline}, Price: ₹{flight.price}, Seats: {flight.seatsAvailable}</p>
              <p>Status: {flight.status}</p>
            </div>
            <div>
              <button onClick={() => handleUpdate(flight._id)} className="updateButton">
                Cancel Flight
              </button>
              <button onClick={() => handleDelete(flight._id)} className="deleteButton">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightAdmin;
