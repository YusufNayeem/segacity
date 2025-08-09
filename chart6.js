const ctx6 = document.getElementById('barchart3');

  new Chart(ctx6, {
    type: 'bar',
    data: {
      labels: ['2000', '2005', '2010', '2015', '2020', '2025'],
      datasets: [{
        label: 'Student Enrollment (Females) in %',
        data: [21, 55, 58, 65, 43, 93],
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