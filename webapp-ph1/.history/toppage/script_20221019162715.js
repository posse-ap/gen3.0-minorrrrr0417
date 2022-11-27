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
}
