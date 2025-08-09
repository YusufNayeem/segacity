const ctx4 = document.getElementById('Linechart');

const mixedChart = new Chart(ctx4, {
  type: 'bar',
  data: {
    labels: ['NSU', 'BUET', 'DU', 'Sagacity University','IUB', 'UODA', 'DIU', 'BRAC'],
    datasets: [
      {
        label: 'University',
        data: [25, 66, 85, 98, 10, 70, 62, 59],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgba(57, 180, 0, 1)',
          'coral',
          'rgba(63, 73, 94, 1)',
          'rgba(252, 196, 91, 1)',
          'rgba(167, 39, 0, 1)'
        ],
        order: 2
      },
      {
        label: 'Milestone',
        data: [28, 70, 88, 100,13, 73, 65, 62],
        type: 'line',
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
        order: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});