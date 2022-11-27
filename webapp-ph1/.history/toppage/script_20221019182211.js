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
    let hour_data = data.map( function( item ) { return item.time })
  new Chart(context, {
    type: 'bar',
    data: {
      labels: day_data,
      datasets: [{
        label: "",
        data: hour_data,
      }],
    },
    options: {
      responsive: false,
      borderWidth: 2,
      borderRadius: 5,
      backgroundColor: '#1e90ff',
      plugins: {
          legend: {
          display: false,
          }},
      scales: { 
                x:{
                    grid: {
                    drawBorder:false,
                    display: false
                    },
                },
                y:{
                    grid: {
                    drawBorder:false,
                    display: false
                    },
                }
          }
      }
  })
  }




  // ここからドーナツチャート

const CONTENTS_DATA_URL = 'http://posse-task.anti-pattern.co.jp/1st-work/study_contents.json';
fetch(CONTENTS_DATA_URL)
  .then(function(response){
  return response.json();
  })
  .then(function(jsonData){
  // JSONデータを扱った処理など
  ContentsDoughnutChart(jsonData)
  // console.log(jsonData);
  });
  function ContentsDoughnutChart(data){
    let context = document.querySelector("#barChart").getContext('2d')
    console.log(data)
    // let day_data = data.map( function( item ) { return item.day })
    // let hour_data = data.map( function( item ) { return item.time })
  new Chart(context, {
    type: 'doughnut',
    data: {
      labels: day_data,
      datasets: [{
        label: "",
        data: hour_data,
      }],
    },
    options: {
      responsive: false,
      borderWidth: 2,
      borderRadius: 5,
      backgroundColor: '#1e90ff',
      plugins: {
          legend: {
          display: false,
          }},
      scales: { 
                x:{
                    grid: {
                    drawBorder:false,
                    display: false
                    },
                },
                y:{
                    grid: {
                    drawBorder:false,
                    display: false
                    },
                }
          }
      }
  })
  }