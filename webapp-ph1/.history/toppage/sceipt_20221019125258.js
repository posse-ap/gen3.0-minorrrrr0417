'use strict';

let context = document.querySelector("barChart").getContext('2d')
const ctx = context.getContext("2d");

new Chart(context, {
  // 実際に表示したいグラフのデータ
  type: 'bar',
  data:{
    labels:[2,4,6,8,10, 12,14,16,18,20,22,24,26,28,30],
    label: '@taguchi',
              data: [120, 300, 200, 210],
              backgroundColor: 'skyblue',
              borderWidth: 0
      },
})
//   const type = 'bar';
//   let data = {
// labels:[2,4,6,8,10, 12,14,16,18,20,22,24,26,28,30],
// label: '@taguchi',
//           data: [120, 300, 200, 210],
//           backgroundColor: 'skyblue',
//           borderWidth: 0
//   };
//   var options = {
//     scales: {
//       yAxes: [{
//         ticks: {
//           suggestedMin: 0,
//           suggestedMax: 400
//         }
//       }]
//     }
    // scales: {
    //   xAxes: [{
    //     stacked: true
    //   }],
    //   yAxes: [{
    //     stacked: true
    //   }]
    // }
//   };


// var myChart = new Chart(bar_chart, {
//   type: type,
//   data: data,
//   options: options
// });

// bar_chart.innerText = myChart;