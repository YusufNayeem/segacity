const ctx = document.getElementById('barchart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2000', '2005', '2010', '2015', '2020', '2025'],
      datasets: [{
        label: 'Student Enrollment',
        data: [30, 60, 65, 75, 82, 93],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });