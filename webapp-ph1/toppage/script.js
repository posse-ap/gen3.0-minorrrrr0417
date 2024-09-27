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
      responsive: true,
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
            maxRotation:0,
            minRotation:0,
          },
        },
        y: {
          grid: {
            drawBorder: false,
            display: false,
          },
          ticks: {
            stepSize: 2,
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
const LANGUAGE_DATA_URL = "/toppage/json/study_language.json";
fetch(LANGUAGE_DATA_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    LanguageDoughnutChart(jsonData);
  });

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
      responsive: true,
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

const getOrCreateLegendList = (chart, id) => {
  const legendContainer = document.getElementById(id);
  let listContainer = legendContainer.querySelector("ul");

  if (!listContainer) {
    listContainer = document.createElement("ul");
    listContainer.classList.add("canvas_legend");

    legendContainer.appendChild(listContainer);
  }

  return listContainer;
};
const htmlLegendPlugin = {
  id: "htmlLegend",
  afterUpdate(chart, args, options) {
    const ul = getOrCreateLegendList(chart, options.containerID);
    // Remove old legend items
    while (ul.firstChild) {
      ul.firstChild.remove();
    }

    const items = chart.options.plugins.legend.labels.generateLabels(chart);

    items.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("canvas_legend__item");
      const boxSpan = document.createElement("span");
      boxSpan.classList.add("canvas_legend__box");

      // Text
      const textContainer = document.createElement("p");
      textContainer.classList.add("canvas_legend__label");

      const text = document.createTextNode(item.text);
      textContainer.appendChild(text);

      li.appendChild(boxSpan);
      li.appendChild(textContainer);
      ul.appendChild(li);
    });
  },
};

// ここからコンテンツ

const CONTENTS_DATA_URL = "./json/study_contents.json";
fetch(CONTENTS_DATA_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    ContentsDoughnutChart(jsonData);
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
      responsive: true,
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

const modal_display_change = document.getElementById("modal_change");
const loading_circle = document.getElementById("loading_js");
const complete_post = document.getElementById("complete_post_js");
const close_display = document.getElementById("close_visible");
const modal_click = document.getElementById("modal_click");

var fn = function () {
  loading_circle.style.display = "none";
  complete_post.style.display = "block";
};
var tm = 5000;

record_button.addEventListener("click", () => {
  if (checkbox.checked) {
    const t1 = document.getElementById("twitter_text").value;
    location.replace(`https://twitter.com/compose/tweet?text=${t1}`);
  } else {
    modal_display_change.style.visibility = "hidden";
    close_display.style.visibility = "visible";
    loading_circle.style.display = "block";
    setTimeout(fn, tm);
    modal_click.addEventListener("click", () => {
      modal_display_change.style.visibility = "visible";
      // close_display.style.visibility = "hidden";
    })
  }
});

// })