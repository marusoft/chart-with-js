const myChart = document.getElementById("my-chart");
const verticalChart = document.getElementById("vertical-chart");
const horizontalChart = document.getElementById("horizontal-chart");
const areaChart = document.getElementById("area-chart");
console.log(areaChart)

new Chart(myChart, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Vertical Bar Chart
// const labels = Utils.months({ count: 7 });
const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels: labels,
  datasets: [
    {
      // axis: "y",
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

new Chart(verticalChart, {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
new Chart(horizontalChart, {
  type: "bar",
  data: data,
  options: {
    indexAxis: "y",
  },
});

new Chart(areaChart, {
  data: {
    datasets: [
      {
        fill: {
          target: "origin",
          above: "rgb(255, 0, 0)", // Area will be red above the origin
          below: "rgb(0, 0, 255)", // And blue below the origin
        },
      },
    ],
  },
  options: {
    plugins: {
        filler: {
            propagate: true
        }
    }
}
});
