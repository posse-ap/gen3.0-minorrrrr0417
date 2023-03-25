<?php 
declare(strict_types = 1 );
require('../dbconnect.php');
        $today_sql = 'SELECT SUM(StudyHour) from StudyTime where Day = CURDATE()';
        $today = $dbh->query($today_sql)->fetchColumn();

        $month_sql = "SELECT SUM(StudyHour) from StudyTime where DATE_FORMAT(`Day`, '%Y-%m') = DATE_FORMAT(CURDATE(), '%Y-%m')";
        $month = $dbh->query($month_sql)->fetchColumn();

        $total_sql = 'SELECT SUM(StudyHour) from StudyTime';
        $total = $dbh->query($total_sql)->fetchColumn();

        ?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style/reset.css">
  <link rel="stylesheet" href="./style/style.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" ></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0"></script>
  <script src="./script.js" defer></script>
  <title>Document</title>
</head>

<body>
  <header class="header_area">
    <div class="header_left">
      <div class="header_logo"><img src="/toppage/img/logo.svg" alt="POSSE"></div>
      <p class="header_text">4th week</p>
    </div>
      <a href="#modal-01" class="modal-button button_place" id="modal_click" >
        記録・投稿
      </a>
  </header>




<!-- もと -->
      <div class="modal-wrapper" id="modal-01">
        <a href="#!" class="modal-overlay"></a>
        <div class="modal-window">
          <div id="modal_change">
            <div class="modal_under_wrapper">
              <div class="modal_content">
                <div class="modal_top_content">
                <form method="POST" action="./regist.php" enctype="multipart/form-data">
                  <p class="modal_content_title">学習日</p>
                  <div class="calendar-modal-warapper">
                      <div class="modal_content_box_wrapper">
                        <input class="modal_calendar modal_content_box"type="text" id="datepicker" name="Day">
                      </div>
                  </div>
                <p class="modal_content_title">学習コンテンツ（複数選択可）</p>
                  <div class="modal_content_box_check_wrapper">
                    <label class="ECM_CheckboxInput">
                      <input class="ECM_CheckboxInput-Input" type="checkbox" name="Contents" value="1">
                      <span class="ECM_CheckboxInput-DummyInput"></span>
                      <p class="modal_content_box_check">N予備校</p>
                    </label>
                    <label class="ECM_CheckboxInput">
                      <input class="ECM_CheckboxInput-Input" type="checkbox" name="Contents" value="2">
                      <span class="ECM_CheckboxInput-DummyInput"></span>
                      <p class="modal_content_box_check">ドットインストール</p>
                    </label>
                    <label class="ECM_CheckboxInput">
                      <input class="ECM_CheckboxInput-Input" type="checkbox" name="Contents" value="3">
                      <span class="ECM_CheckboxInput-DummyInput"></span>
                      <p class="modal_content_box_check">POSSE課題</p>
                    </label>
                  </div>
                <p class="modal_content_title title_language">学習環境（複数選択可）</p>
                  <div class="modal_content_box_check_wrapper">
                    <label class="ECM_CheckboxInput">
                      <input class="ECM_CheckboxInput-Input" type="checkbox" name="Languages" value="1">
                      <span class="ECM_CheckboxInput-DummyInput"></span>
                      <p class="modal_content_box_check">HTML</p>
                    </label>
                    <label class="ECM_CheckboxInput">
                      <input class="ECM_CheckboxInput-Input" type="checkbox"name="Languages" value="2">
                      <span class="ECM_CheckboxInput-DummyInput"></span>
                      <p class="modal_content_box_check">CSS</p>
                    </label>
                    <label class="ECM_CheckboxInput">
                      <input class="ECM_CheckboxInput-Input" type="checkbox" name="Languages" value="3">
                      <span class="ECM_CheckboxInput-DummyInput"></span>
                      <p class="modal_content_box_check">JavaScript</p>
                    </label>
                    <label class="ECM_CheckboxInput">
                      <input class="ECM_CheckboxInput-Input" type="checkbox" name="Languages" value="4">
                      <span class="ECM_CheckboxInput-DummyInput"></span>
                      <p class="modal_content_box_check">PHP</p>
                    </label>
                    <label class="ECM_CheckboxInput">
                      <input class="ECM_CheckboxInput-Input" type="checkbox" name="Languages" value="5">
                      <span class="ECM_CheckboxInput-DummyInput"></span>
                      <p class="modal_content_box_check">Laravel</p>
                    </label>
                    <label class="ECM_CheckboxInput">
                      <input class="ECM_CheckboxInput-Input" type="checkbox" name="Languages" value="6">
                      <span class="ECM_CheckboxInput-DummyInput"></span>
                      <p class="modal_content_box_check">SQL</p>
                    </label>
                    <label class="ECM_CheckboxInput">
                      <input class="ECM_CheckboxInput-Input" type="checkbox" name="Languages" value="7">
                      <span class="ECM_CheckboxInput-DummyInput"></span>
                      <p class="modal_content_box_check">SHELL</p>
                    </label>
                    <label class="ECM_CheckboxInput">
                      <input class="ECM_CheckboxInput-Input" type="checkbox" name="Languages" value="8">
                      <span class="ECM_CheckboxInput-DummyInput"></span>
                      <p class="modal_content_box_check">情報システム基礎知識（その他）</p>
                    </label>
                  </div>
                </div>
              </div>
              <div class="modal_content">
                <div class="modal_top_content">
                  <p class="modal_content_title">学習時間</p>
                  <div class="modal_content_box_wrapper">
                  <input class="modal_content_box" type="text" name="studytime"></input>
                </div>
              </div>
                <p class="modal_content_title">Twitter用コメント</p>
                <input type="text" class="modal_content_box_twitter" id="twitter_text"></input>
                <label class="ECM_CheckboxInput share_place">
                    <input class="ECM_CheckboxInput-Input button" type="checkbox" id="twitter_check">
                    <span class="ECM_CheckboxInput-DummyInput"></span>
                  <div class="modal_content_twitter_check">Twitterにシェアする</div>
                  <div class="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true"></div>
                </label>
              </div>
            </div>
            <a href="#!" class="modal-close" id="close_visible">×</a>
            <button class="modal-button modal_under_button " id="record">
              記録・投稿
            </button>
          </div>
          <div class="loading loading_display" id="loading_js" >
            <div class="loader003"></div>
          </div>
          <div class="complete_post_wrapper" id="complete_post_js">
            <p class="complete_awesome">AWESOME!</p>
            <div>
            <span class="checkmark002"></span>
          </div>
            <p class="complete_message">記録・投稿<br>
              完了しました
            </p>
          </div>
        </div>
      </div>
      
    </div>
    
  <main>
    <div class="contents_wrapper">
      <div class="left_area">
        <ul class="top_data_wrapper">
            <li class="top_data_box">
              <div class="top_data_inner">
                <div class="data_name">Today</div>
                <div class="data_number"><?=$today ?></div>
                <div class="data_unit">hour</div>
              </div>
            </li>
            <li class="top_data_box">
              <div class="top_data_inner">
                <div class="data_name">Month</div>
                <div class="data_number"><?=$month?></div>
                <div class="data_unit">hour</div>
              </div>
            </li>
            <li class="top_data_box">
              <div class="top_data_inner">
                <div class="data_name">Total</div>
                <div class="data_number"><?= $total?></div>
                <div class="data_unit">hour</div>
              </div>
            </li>
        </ul>
        <div class="under_area">
            <canvas id="barChart" width="620" height="410"></canvas>
        </div>
      </div>
      
      <div class="right_area">
        <div class="circle_box_wrapper">
          <div class="circle_box">
            <p class="circle_box_text">学習言語</p>
            <canvas class="doughnut_chart" id="LanguageChart" width="40" height="110"></canvas>
            <div id="legend-container-language"></div>
          </div>
          <div class="circle_box">
            <p class="circle_box_text">学習コンテンツ</p>
            <canvas class="doughnut_chart"id="ContentsChart" width="40" height="1
            10"></canvas>
            <div id="legend-container-contents" class="canvas-legend"></div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <a href="#modal-01" class="modal-button button_place2">
        記録・投稿
      </a>
      <div class="footer_wrapper">
      <p class="footer_left">＜</p>
      <p class="footer_text">2020年10月</p>
      <p class="footer_right">＞</p>
    </div>
      
    </footer>
  </main>
  <?php
require('../toppage/chart.php');
?>
</body>
</html>
