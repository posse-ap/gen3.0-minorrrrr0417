<?php
declare(strict_types = 1);
// PDOの設定を呼び出す
require('../dbconnect.php');


  // // 当月の勉強時間取得
  $bar_stmt = $dbh->query(
    "SELECT
      sum(StudyTime.StudyHour)
    FROM
      StudyTime
    GROUP BY
      Day
    HAVING
      DATE_FORMAT(Day, '%Y/%m') = DATE_FORMAT(now(), '%Y/%m')
      "
  );
  $bar = $bar_stmt->fetchALL();

  // 総学習時間
  $sum_time_stmt = $dbh->query(
    "SELECT
      sum(StudyTime.StudyHour)
    FROM
      StudyTime
      "
  );
  $sum_time = $sum_time_stmt->fetchALL();


  // コンテンツごとの学習時間取得
  $contents_stmt = $dbh->query(
    "SELECT
      sum(StudyTime.studyHour)
    FROM
      StudyTime
    GROUP BY
      Contents
      "
  );
  $contents = $contents_stmt->fetchALL();

  // 言語ごとの学習時間
  $languages_stmt = $dbh->query(
    "SELECT
      sum(StudyTime.studyHour)
    FROM
      StudyTime
    GROUP BY
      Languages
      "
  );
  $languages = $languages_stmt->fetchALL();

?>


<script>
    // 棒グラフ
const bar_chart_id= document.getElementById("barChart")
let context = bar_chart_id?.getContext("2d");
  new Chart(context, {
    type: "bar",
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30
      ],
      datasets: [
        {
          data: [<?php
          foreach ($bar as $bar_data) {
            echo $bar_data["sum(StudyTime.StudyHour)"] . ',';
          };
          
          ?>],
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


// ここからドーナツチャート

// 学習言語

function LanguageDoughnutChart() {
  let context = document.querySelector("#LanguageChart")?.getContext("2d");
  new Chart(context, {
    type: "doughnut",
    data: {
      labels: ['HTML', 'CSS', 'Javascript', 'PHP', 'Laravel', 'SQL', 'SHELL', '情報システム基礎知識(その他)'],
      datasets: [
        {
          data: 
         [2,2,4,4,5,6,7,8]
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
LanguageDoughnutChart();

// ここからコンテンツ

function ContentsDoughnutChart() {
  let context = document.querySelector("#ContentsChart").getContext("2d");
  new Chart(context, {
    type: "doughnut",
    data: {
      labels: ['N予備校', 'ドットインストール','POSSE課題'],
      datasets: [
        {
          data: [<?php  foreach ( $contents as $key => $content){

         echo ((int)$content['sum(StudyTime.studyHour)'] / (int)$sum_time[0]['sum(StudyTime.StudyHour)']) *100 . ',';
        };
          ?>],
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

ContentsDoughnutChart();

// })



  </script>

