import Flight from "../models/Flight.js";

// Create a new flight
export const createFlight = async (req, res, next) => {
  const newFlight = new Flight(req.body);
  try {
    const savedFlight = await newFlight.save();
    res.status(200).json(savedFlight);
  } catch (err) {
    next(err);
  }
};

// Update an existing flight
export const updateFlight = async (req, res, next) => {
  try {
    const updatedFlight = await Flight.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedFlight);
  } catch (err) {
    next(err);
  }
};

// Delete a flight
export const deleteFlight = async (req, res, next) => {
  try {
    await Flight.findByIdAndDelete(req.params.id);
    res.status(200).json("Flight has been deleted.");
  } catch (err) {
    next(err);
  }
};

// Get a specific flight
export const getFlight = async (req, res, next) => {
  try {
    const flight = await Flight.findById(req.params.id);
    res.status(200).json(flight);
  } catch (err) {
    next(err);
  }
};

export const getFlights = async (req, res, next) => {
    const { minPrice = 1, maxPrice = 100000, limit, ...others } = req.query;
    try {
      const flights = await Flight.find({
        ...others,
        price: {
          $gte: Number(minPrice),
          $lte: Number(maxPrice),
        },
      }).limit(Number(limit));
      res.status(200).json(flights);
    } catch (err) {
      next(err);
    }
  };
  export const countByPlaces = async (req, res, next) => {
    const destinations = req.query.destinations.split(",");
    try {
      const list = await Promise.all(
        destinations.map((place) => {
          return Flight.countDocuments({ to: place });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };
  export const countByAirline = async (req, res, next) => {
    const airlines = req.query.airlines.split(",");
    try {
      const list = await Promise.all(
        airlines.map((airline) => {
          return Flight.countDocuments({ airline: airline });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };
  export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Flight.countDocuments({ from: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };
