const express = require("express");
const path = require("path");
const app = express();
const PORT = 4000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Dummy API endpoint
app.get("/api/stats", (req, res) => {
  res.json({
    totalUsers: 1240,
    totalSales: 46200,
    activeOrders: 148,
    months: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    salesData: [4200, 4600, 4800, 5300, 5600, 5900, 6100, 6300, 6700, 6900, 7200, 7400],
    userGrowth: [200, 220, 250, 300, 340, 370, 400, 430, 460, 500, 540, 580]
  });
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
