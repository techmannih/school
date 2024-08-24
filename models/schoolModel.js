const db = require("../config/db");

// School Model
const School = {
  // Add a new school
  addSchool: async (name, address, latitude, longitude) => {
    try {
      const query =
        "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
      const [result] = await db.query(query, [
        name,
        address,
        latitude,
        longitude,
      ]);
      return result;
    } catch (error) {
      throw error;
    }
  },

  // Get all schools
  getAllSchools: async () => {
    try {
      const query = "SELECT * FROM schools";
      const [rows] = await db.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = School;
