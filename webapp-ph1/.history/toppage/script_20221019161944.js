'use strict';

// Chart.register(ChartDataLabels);

// let context = document.getElementById("barChart").getContext("2d");
// const ctx = context;

// new Chart(context, {
//   // 実際に表示したいグラフのデータ
//   type: 'bar',
//   data:{
//     labels:[2,4,6,8,10, 12,14,16,18,20,22,24,26,28,30],
//     label: '@taguchi',
//               data: [120, 300, 200, 210],
//               backgroundColor: 'skyblue',
//               borderWidth: 0
//       },
// })
// let context = document.querySelector("#japanese_people_chart").getContext('2d')
createBarChart()

function createBarChart() {
  let context = document.querySelector("#barChart").getContext('2d')
  new Chart(context, {
    type: 'bar',
    data: {
      labels: ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年'],
      datasets: [{
        label: "日本の人口推移",
        data: [127094745, 127041812, 126918546, 126748506, 126555078, 126146099],
      }],
    },
    options: {
      responsive: false
    }
  })
}
const TIME_LOG_DATA_URL = 'http://posse-task.anti-pattern.co.jp/1st-work/study_time.json';
fetch(TIME_LOG_DATA_URL)
 .then(function(response){
  return response.json();
 })
 .then(function(jsonData){
  // JSONデータを扱った処理など
  console.log(jsonData);
 });
 function 
// }
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