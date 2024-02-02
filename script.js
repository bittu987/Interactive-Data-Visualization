const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
      label: 'Monthly Sales',
      data: [65,59,80,81,56],
        backgroundColor:'rgba(75, 192, 192, 0.2)',
        borderColor:'rgba(75, 192, 192, 1)',
      
      borderWidth: 1
    }]
  }

const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  const barChart = document.getElementById("barchart");

  new Chart(barChart,config);
