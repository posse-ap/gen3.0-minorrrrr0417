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
    console.log(day_data);
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
                    ticks: {
                      stepSize: 2,
                    },
                },
                y:{
                    grid: {
                    drawBorder:false,
                    display: false
                    },
                    ticks: {
                      stepSize: 2,
                    },
                }
          }
      }
  })
  }




  // ここからドーナツチャート
  // 学習言語
  const LANGUAGE_DATA_URL = 'http://posse-task.anti-pattern.co.jp/1st-work/study_language.json';
fetch(LANGUAGE_DATA_URL)
  .then(function(response){
  return response.json();
  })
  .then(function(jsonData){
  // JSONデータを扱った処理など
  LanguageDoughnutChart(jsonData)
  // console.log(jsonData);
  });
  
  function LanguageDoughnutChart(data){
    let context = document.querySelector("#LanguageChart").getContext('2d')
    const contents_item = Object.keys(data[0])
    const contents_rate = Object.values(data[0])
    new Chart(context, {
      type: 'doughnut',
      data: {
        labels: contents_item,
        datasets: [{
          data: contents_rate,
        }],
      },options:{
        backgroundColor:["#0000ff","#6495ed","#87cefa","#00ffff","#dda0dd","#da70","#9966cc","#330099"],
        plugins:{
          legend:{
            position:'bottom',
            align:'start',
          },
          labels:{
            borderRadius: 5,
          }
      },
  }});
   
  }


  // ここからコンテンツ

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
    const contents_item = Object.keys(data[0])
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
        plugins:{
          legend:{
            position:'bottom',
            align:'start',
          },
          labels:{
            borderRadius: 5,
          }
      },
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