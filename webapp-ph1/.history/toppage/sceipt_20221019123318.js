'use strict';

const bar_chart = document.getElementById('barChart');


  const type = 'bar';
  let data = {
labels:[2,4,6,8,10, 12,14,16,18,20,22,24,26,28,30],
label: '@taguchi',
          data: [120, 300, 200, 210],
          backgroundColor: 'skyblue',
          borderWidth: 0
  };
  var options = {
    // scales: {
    //   yAxes: [{
    //     ticks: {
    //       suggestedMin: 0,
    //       suggestedMax: 400
    //     }
    //   }]
    // }
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    }
  };

var ctx = document.getElementById('my_chart').getContext('2d');
var myChart = new Chart(ctx, {
  type: type,
  data: data,
  options: options
});

bar_chart.innerText = myChart;