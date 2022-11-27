"use strict";

$(document).ready(function () {
  $(document).on("show.bs.modal", ".modal", (e) => {
    const $currentModal = $(e.currentTarget);
    var zIndex = 1040 + 10 * $(".modal:visible").length;
    $currentModal.css("z-index", zIndex);
    setTimeout(function () {
      $(".modal-backdrop")
        .not(".modal-stack")
        .css("z-index", zIndex - 1)
        .addClass("modal-stack");
    }, 0);
  });
});

$("#datepicker").datepicker();

const TIME_LOG_DATA_URL =
  "http://posse-task.anti-pattern.co.jp/1st-work/study_time.json";
fetch(TIME_LOG_DATA_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    // JSONデータを扱った処理など
    BarChart(jsonData);
  });

function BarChart(data) {
  let context = document.querySelector("#barChart").getContext("2d");
  let day_data = data.map(function (item) {
    return item.day;
  });
  let hour_data = data.map(function (item) {
    return item.time;
  });
  new Chart(context, {
    type: "bar",
    data: {
      labels: day_data,
      datasets: [
        {
          label: "",
          data: hour_data,
        },
      ],
    },
    options: {
      responsive: false,
      borderRadius: 5,
      backgroundColor: "#1e90ff",
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            drawBorder: false,
            display: false,
          },
          ticks: {
            autoSkip: false,
            callback: function (value, index) {
              return index % 2 === 1 ? this.getLabelForValue(value) : "";
            },

            // stepSize: 2,
          },
        },
        y: {
          grid: {
            drawBorder: false,
            display: false,
          },
          ticks: {
            stepSize: 2,
            // 目盛にドル記号を入れる
            callback: function (value, index, values) {
              return value + "h";
            },
          },
        },
      },
    },
  });
}

// ここからドーナツチャート
// 学習言語
const LANGUAGE_DATA_URL =
  "http://posse-task.anti-pattern.co.jp/1st-work/study_language.json";
fetch(LANGUAGE_DATA_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    // JSONデータを扱った処理など
    LanguageDoughnutChart(jsonData);
    // console.log(jsonData);
  });

const getOrCreateLegendList = (chart, id) => {
  const legendContainer = document.getElementById(id);
  let listContainer = legendContainer.querySelector("ul");

  if (!listContainer) {
    listContainer = document.createElement("ul");
    listContainer.classList.add("canvas-legend__list");

    legendContainer.appendChild(listContainer);
  }

  return listContainer;
};
const htmlLegendPlugin = {
  id: "htmlLegend",
  // afterUpdate(chart, args, options) {
  //   const ul = getOrCreateLegendList(chart, options.containerID);

  //   // Remove old legend items
  //   while (ul.firstChild) {
  //     ul.firstChild.remove();
  //   }

    // Reuse the built-in legendItems generator
    const items = chart.options.plugins.legend.labels.generateLabels(chart);

    const createQuizHtml = (quizItem, questionNumber) => {
      
    }
  }

//     items.forEach((item) => {
//       const li = document.createElement("li");
//       li.classList.add("canvas-legend__item");
//       const legend_color = items.map((item,index) =>{
//       const boxSpan = document.createElement("span");
      
//       return
//       boxSpan.classList.add("language_legend_${index}")
//       });

//       legend_color()
//       // const lists = Array.from(document.querySelectorAll("canvas-legend__item"));
//       // // console.log(lists)
//       // const regend_color= item.map((l,index) => {
//       //     l.classList.add("language_regend_${index}")
//       //     return""
//       //     // console.log(index);
//       // });
//       // regend_color()
//       // // Color box
//       const boxSpan = document.createElement("span");
//       // boxSpan.style.background = item.fillStyle;
//       // boxSpan.style.borderColor = item.strokeStyle;
//       // boxSpan.style.borderWidth = item.lineWidth + "px";
//       boxSpan.classList.add("canvas-legend__box");

//       // Text
//       const textContainer = document.createElement("p");
//       textContainer.style.color = item.fontColor;
//       textContainer.classList.add("canvas-legend__label");

//       const text = document.createTextNode(item.text);
//       textContainer.appendChild(text);

//       li.appendChild(boxSpan);
//       li.appendChild(textContainer);
//       ul.appendChild(li);
//     });
//   },
// };

function LanguageDoughnutChart(data) {
  let context = document.querySelector("#LanguageChart").getContext("2d");
  const contents_item = Object.keys(data[0]);
  const contents_rate = Object.values(data[0]);
  new Chart(context, {
    type: "doughnut",
    data: {
      labels: contents_item,
      datasets: [
        {
          data: contents_rate,
        },
      ],
    },
    options: {
      backgroundColor: [
        "#0000ff",
        "#6495ed",
        "#87cefa",
        "#afeeee",
        "#dda0dd",
        "#da70d6",
        "#ba55d3",
        "#9966cc",
      ],
      plugins: {
        htmlLegend: {
          containerID: "legend-container-language",
        },
        legend: {
          display: false,
        },
        labels: {
          borderRadius: 5,
        },
        datalabels: {
          font: {
            size: 10,
          },
          formatter: function (value, context) {
            return value.toString() + "%";
          },
        },
      },
    },
    plugins: [ChartDataLabels, htmlLegendPlugin],
  });
}

// ここからコンテンツ

const CONTENTS_DATA_URL =
  "http://posse-task.anti-pattern.co.jp/1st-work/study_contents.json";
fetch(CONTENTS_DATA_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    // JSONデータを扱った処理など
    ContentsDoughnutChart(jsonData);
    // console.log(jsonData);
  });

function ContentsDoughnutChart(data) {
  let context = document.querySelector("#ContentsChart").getContext("2d");
  const contents_item = Object.keys(data[0]);
  const contents_rate = Object.values(data[0]);
  new Chart(context, {
    type: "doughnut",
    data: {
      labels: contents_item,
      datasets: [
        {
          data: contents_rate,
        },
      ],
    },
    options: {
      backgroundColor: ["#0000ff", "#6495ed", "#87cefa"],
      plugins: {
        htmlLegend: {
          containerID: "legend-container-contents",
        },
        legend: {
          display: false,
        },
        datalabels: {
          font: {
            size: 10,
          },
          formatter: function (value, context) {
            return value.toString() + "%";
          },
        },
      },
    },
    plugins: [ChartDataLabels, htmlLegendPlugin],
  });
}

const record_button = document.getElementById("record");
const checkbox = document.getElementById("twitter_check");
const loader_display = document.getElementById("loader_js");
// const twitter_text = document.getElementById('twitter_text');
const t1 = document.getElementById("twitter_text").value;
console.log(t1);
const modal_display_change = document.getElementById("modal_change");
const loading_circle = document.getElementById("loading_js");
const complete_post = document.getElementById("complete_post_js");
const close_display = document.getElementById("close_visible");

var fn = function () {
  loading_circle.style.display = "none";
  complete_post.style.display = "block";
};
var tm = 3000;

record_button.addEventListener("click", () => {
  // checkbox.addEventListener('change',function(){
  if (checkbox.checked) {
    // ←重要なポイント！
    location.replace(`https://twitter.com/compose/tweet?text=${t1}`);
  } else {
    modal_display_change.style.visibility = "hidden";
    close_display.style.visibility = "visible";
    loading_circle.style.display = "block";
    setTimeout(fn, tm);
  }
});

// })
