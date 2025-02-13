// const express = require("express");
// const cors = require("cors");
// const fetch = require("node-fetch");

// const app = express();
// app.use(cors()); // Enable CORS for all origins
// app.use(express.json()); // Parse JSON requests

// app.post("/api/locations", async (req, res) => {
//   try {
//     const response = await fetch("https://api.icabbidispatch.com/icd7/locations/search", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(req.body),
//     });

//     if (!response.ok) {
//       throw new Error(`API error: ${response.status}`);
//     }

//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching locations", error: error.message });
//   }
// });

// app.listen(5000, () => console.log("Proxy server running on port 5000"));
