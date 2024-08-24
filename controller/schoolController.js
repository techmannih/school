const School = require("../models/schoolModel");
const haversineDistance = require("../utils/haversine");

// Add a new school
exports.addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // Validate input
  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({
      message:
        "All fields (name, address, latitude, and longitude) are required.",
    });
  }

  if (typeof latitude !== "number" || typeof longitude !== "number") {
    return res
      .status(400)
      .json({ message: "Latitude and longitude must be numbers." });
  }

  try {
    const result = await School.addSchool(name, address, latitude, longitude);

    // Construct the response data
    const data = {
      id: result.insertId, // Auto-generated ID from the database
      name,
      address,
      latitude,
      longitude,
    };

    // Respond with the inserted data
    res.status(201).json({ message: "School added successfully", data });
  } catch (error) {
    res.status(500).json({ message: "Database error", error: error.message });
  }
};

// List all schools

// List schools sorted by proximity to user location
exports.listSchools = async (req, res) => {
  const { latitude, longitude } = req.query;

  // Validate the user's coordinates
  if (!latitude || !longitude) {
    return res
      .status(400)
      .json({ message: "User latitude and longitude are required." });
  }

  try {
    const schools = await School.getAllSchools();

    // Calculate the distance from user location and sort by proximity
    const schoolsWithDistance = schools.map((school) => {
      const distance = haversineDistance(
        parseFloat(latitude),
        parseFloat(longitude),
        parseFloat(school.latitude),
        parseFloat(school.longitude)
      );
      return {
        id: school.id,
        name: school.name,
        address: school.address,
        latitude: school.latitude,
        longitude: school.longitude,
        distance: distance.toFixed(2), // Distance in kilometers
      };
    });

    // Sort schools by distance
    schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    res.status(200).json({
      message: "Schools sorted by proximity",
      data: schoolsWithDistance,
    });
  } catch (error) {
    res.status(500).json({ message: "Database error", error: error.message });
  }
};
