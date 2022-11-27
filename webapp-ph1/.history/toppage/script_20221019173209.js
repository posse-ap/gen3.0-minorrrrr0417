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
      scales: {         // 軸設定
        xAxes: [           // Ｘ軸設定
            {
                // scaleLabel: {   // 軸ラベル
                //     :
                // },
                gridLines: {    // 目盛線
                    // display: false
                },
                // ticks: {        // 目盛り
                //     :
                // },
            }
        ],
        // yAxes: [           // Ｙ軸設定
        //     :      xAxesと同様  
        // ]

}
    })
  }
