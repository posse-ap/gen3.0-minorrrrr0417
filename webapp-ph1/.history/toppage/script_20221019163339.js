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
    let day_data = data.map( function( item ) { return item.day })
    let day_data = data.map( function( item ) { return item.day })
  new Chart(context, {
    type: 'bar',
    data: {
      labels: day_data,
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


