const ctx3 = document.getElementById('barchart1');

  new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F'],
      datasets: [{
        label: 'Yearly Grades in %',
        data: [99, 85, 78, 58, 60, 30, 73, 65, 32, 20, 0],
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