'use strict';

const bar_chart = document.getElementById('barChart');

function(){
  const type = 'bar';
  let data = {
labels:[2,4,6,8,10, 12,14,16,18,20,22,24,26,28,30],

  }
}
var ctx = document.getElementById('my_chart').getContext('2d');
var myChart = new Chart(ctx, {
  type: type,
  data: data,
  options: options
});

bar_chart.innerText = 