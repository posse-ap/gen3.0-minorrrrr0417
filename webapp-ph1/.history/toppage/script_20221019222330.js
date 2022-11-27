'use strict';



const TIME_LOG_DATA_URL = 'http://posse-task.anti-pattern.co.jp/1st-work/study_time.json';
fetch(TIME_LOG_DATA_URL)
  .then(function(response){
  return response.json();
  })
  .then(function(jsonData){
  // JSONデータを扱った処理など
  BarChart(jsonData)
  });

  function BarChart(data){
    let context = document.querySelector("#barChart").getContext('2d')
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
    let context = document.querySelector("#ContentsChart").getContext('2d')
    console.log(data)
    const contents_item = Object.keys(data[0])
    console.log(contents_item)
    const contents_rate = Object.values(data[0])
    new Chart(context, {
      type: 'doughnut',
      data: {
        labels: contents_item,
        datasets: [{
          data: contents_rate,
        }],
      },options:{
        backgroundColor:["#0000ff","#6495ed","#87cefa"],
        plugins: [{
          legend:{
            position:"bottom",
          }
      }],
  }});
    // let  = data.map( function( item ) { return item.day })
    // let hour_data = data.map( function( item ) { return item.time })
  // new Chart(context, {
  //   type: 'doughnut',
  //   data: {
  //     labels: day_data,
  //     datasets: [{
  //       label: "",
  //       data: hour_data,
  //     }],
  //   },
  //   options: {
  //     responsive: false,
  //     borderWidth: 2,
  //     borderRadius: 5,
  //     backgroundColor: '#1e90ff',
  //     plugins: {
  //         legend: {
  //         display: false,
  //         }},
  //     scales: { 
  //               x:{
  //                   grid: {
  //                   drawBorder:false,
  //                   display: false
  //                   },
  //               },
  //               y:{
  //                   grid: {
  //                   drawBorder:false,
  //                   display: false
  //                   },
  //               }
  //         }
  //     }
  // })
  // data = {
  //   datasets: [{
  //       data: [10, 20, 30]
  //   }],
  }