async function loadDashboard() {
  try {
    const res = await fetch("/api/data");
    const data = await res.json();

    document.getElementById("users").textContent = data.totalUsers;
    document.getElementById("sales").textContent = "₹" + data.totalSales.toLocaleString();
    document.getElementById("orders").textContent = data.activeOrders;

    Chart.defaults.font.family = "Inter, sans-serif";
    Chart.defaults.color = "#4B5563";

    new Chart(document.getElementById("salesChart"), {
      type: "bar",
      data: {
        labels: data.months,
        datasets: [{
          label: "Sales (₹)",
          data: data.monthlySales,
          backgroundColor: "rgba(79,70,229,0.7)",
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: "#E5E7EB" } },
          x: { grid: { display: false } }
        }
      }
    });

    new Chart(document.getElementById("usersChart"), {
      type: "line",
      data: {
        labels: data.months,
        datasets: [{
          label: "User Growth",
          data: data.userGrowth,
          borderColor: "rgb(16,185,129)",
          backgroundColor: "rgba(16,185,129,0.2)",
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: "#E5E7EB" } },
          x: { grid: { display: false } }
        }
      }
    });

  } catch (error) {
    console.error("Dashboard load error:", error);
  }
}

loadDashboard();
