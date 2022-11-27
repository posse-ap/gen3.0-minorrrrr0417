'use strict';



const TIME_LOG_DATA_URL = 'http://posse-task.anti-pattern.co.jp/1st-work/study_time.json';
fetch(TIME_LOG_DATA_URL)
  .then(function(response){
  return response.json();
  })
  .then(function(jsonData){
  // JSONデータを扱った処理など
  BarChart(jsonData)
  // console.log(jsonData);
  });

  function BarChart(data){
    let context = document.querySelector("#barChart").getContext('2d')
    console.log(data)
    let arr2 = data.map( function( item ) { return item.day };
    console.log(arr2
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


