const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const schoolRoutes = require("./routes/school.routes");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/", schoolRoutes);

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Welcome to School Management API</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f0f0f0;
            margin: 0;
            padding: 50px;
          }
          h1 {
            color: #3498db;
          }
          p {
            font-size: 1.2em;
            color: #333;
          }
          .container {
            background: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            display: inline-block;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to School Management API</h1>
          <p>Your Node.js API is running smoothly! 🎉</p>
          <p>Get ready to manage your schools efficiently with our API.</p>
        </div>
      </body>
    </html>
  `);
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
