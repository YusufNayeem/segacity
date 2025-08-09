const ctx5 = document.getElementById('barchart2');

  new Chart(ctx5, {
    type: 'bar',
    data: {
      labels: ['2000', '2005', '2010', '2015', '2020', '2025'],
      datasets: [{
        label: 'Student Enrollment (Males) in %',
        data: [50, 68, 60, 78, 52, 99],
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