'use strict';


let quiz =[
  {
    number: 1,
    question: "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
    picture: 0,
    option1 :"約28万人",
    option2 :"約79万人",
    option3 :"約183万人",
    correctAnswer: "約79万人",
    quote: "経済産業省 2019年3月 - IT 人材需給に関する調査"
  },
  
  {
    number: 2,
    question: "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
    picture: 0,
    option1 :"INTECH",
    option2 :"BIZZTECH",
    option3 :"X-TECH",
    correctAnswer: "X-TECH",
  },
  {
    number: 3,
    question: "IoTとは何の略でしょう？",
    picture: 0,
    option1 :"Internet of Things",
    option2 :"Integrate into Technology",
    option3 :"Information on Tool",
    correctAnswer: "Internet of Things",
  },
  {
    number: 4,
    question: "日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？",
    picture: 0,
    option1 :"Society 5.0",
    option2 :"CyPhy",
    option3 :"SDGs",
    correctAnswer: "Society 5.0",
    quote: "Society5.0 - 科学技術政策 - 内閣府"
  },
  {
    number: 5,
    question: "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
    picture: 0,
    option1 :"Web3.0",
    option2 :"NFT",
    option3 :"メタバース",
    correctAnswer: "Web3.0",
  },
  {
    number: 6,
    question: "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？",
    picture: 0,
    option1 :"約2倍",
    option2 :"約5倍",
    option3 :"約11倍",
    correctAnswer: "約5倍",
    quote: "Technology Vision 2021"
  },
  
]







function create_quiz(i){
  const quiz_area = document.getElementById("quizSection");
  const quiz_html =`<div class="quizWrapper">`
                      +`<div class="quizContents">`                 
                        +`<h2 class="quizNumber" id="question_number_js"> Q${i+1}</h2>`
                        +`<h4 class="quizDescription">${quiz[i].question}</h4>`
                      +`</div>`
                      +`<div class ="quizPeople">`
                        +`<img src='/img/quiz/${quiz[i].number}.png' class="quizOneImg">`
                      +`</div>`
                      +`<div class="quizAnswer">A</div>`
                      +`<ul class="quizAnswerWrapper">`
                          +`<li>`
                            +`<button class="quizChoice quizChoice${i}" id="option${i}-1" >${quiz[i].option1}`
                            +`<i class="iconArrow"><img src="/img/icon/icon-arrow.svg" alt=""></i>`   
                          +`</li>`
                          +`<li>`
                            +`<button class="quizChoice quizChoice${i}" id="option${i}-2" >${quiz[i].option2}`
                            +`<i class="iconArrow"><img src="/img/icon/icon-arrow.svg" alt=""></i>`   
                          +`</li>`
                          +`<li>`
                            +`<button class="quizChoice quizChoice${i}" id="option${i}-3">${quiz[i].option3}`
                            +`<i class="iconArrow"><img src="/img/icon/icon-arrow.svg" alt=""></i>`   
                          +`</li>`
                      +`</ul>` 
                      
                    +`<div class="correctWrapper" id="correctArea${i}">`
                      +`<div class="contentsPosition">`
                        +`<div class = "correct">正解！</div>`
                        +`<div class = "answerAreaPosition">`
                          +`<div class = "correctA">A</div>`
                          +`<div class = "correctAnswer" >${quiz[i].correctAnswer}</div>`
                        +`</div>`
                      +`</div>`
                    +`</div>`
                    
                    +`<div class="wrongWrapper" id="wrongArea${i}">`
                      +`<div class="contentsPosition">`
                        +`<div class = "wrong">不正解...</div>`
                        +`<div class = "answerAreaPosition">`
                          +`<div class = "wrongA">A</div>`
                          +`<div class = "wrongAnswer">${quiz[i].correctAnswer}</div>`
                        +`</div>`
                      +`</div>`
                    +`</div>`
                    +`<div>${quote_area(i)}</div>`

                    
  return quiz_area.insertAdjacentHTML("beforeend",quiz_html);
  
}


// 引用
let quote_html
function quote_area(i){
    quote_html =`<div class="quizCiteBox">`
                    +`<img src="/img/icon/icon-note.svg" alt="">`
                    +`<div class="referenceArea">${quiz[i].quote}</div>`
                  +`</div>`;
                  +`</div>`;
    if(quiz[i].quote){
                    return quote_html;
                  }else{
                    return "";
                  }
}


// 正誤判定




  window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll(`.quizChoice`);
    const answer_area = document.getElementById(`answerWrapper`);

      buttons.forEach(button =>{
        button.addEventListener(`click`, (event) => {
          const targetId = event.target.id
          const quizNumber = Number(targetId.substring(6,7));
          const answerArea = document.getElementById(`correctArea${quizNumber}`);
          const WrongAnswerArea = document.getElementById(`wrongArea${quizNumber}`);
          const choices = document.querySelectorAll(`.quizChoice${quizNumber}`);
          const setDisabled = choices => {
            choices.forEach(choice => {
            choice.disabled = true;})
          }
          setDisabled(choices);
          
          
          button.classList.add(`is-selected`);
          
          if (button.innerText === quiz[quizNumber].correctAnswer){
            answerArea.classList.add(`correctZone`);
          }else{
            WrongAnswerArea.classList.add(`wrongZone`);
          }
          
        });
      });
      
  })
  
  
  
  
//   function optionShuffle(i){
//     const str1 = quiz[i].option1;
//   const str2 = quiz[i].option2;
//   const str3 = quiz[i].option3;
//   const optionArray =[l, m, n];
//   let deflength = optionArray.length;
//   for(let i = 0; i < deflength; i++) {
//   console.log(optionArray);
//   const j = Math.floor(Math.random()*(i+1));
//   [optionArray[j], optionArray[i]] = [optionArray[i], optionArray[j]];
// }
//   }
function shuffle(arr) {
  for ( let i = 0; i < arr.length ; i++) {
    const str1 = quiz[i].option1;
    const str2 = quiz[i].option2;
    const str3 = quiz[i].option3;
    const optionArray =[str1, str2, str3]; 
    const k = arr;
    const j = Math.floor(Math.random() * 3);
    [optionArray[j], optionArray[k]] = [optionArray[k], optionArray[j]]; 
    console.log(optionArray)
  }
  // return arr;
};
shuffle(quiz)

  

for(let i = 0; i < quiz.length; i++) {
  const j = Math.floor(Math.random()*(i +1));
  [quiz[j], quiz[i]] = [quiz[i], quiz[j]];
}
  // var str1 = quiz[0];    //配列colの最初の要素
  // var str2 = quiz[rnd];
  // quiz[rnd] = str1;
  // quiz[0]   = str2;
  // let random = Math.random(i );
  // const shuffled = shuffle(quiz[i]);
  for(let i = 0; i < quiz.length; i++) {
  create_quiz(i);
  
  }


  // function shuffle(arr) {
  //   for (let i = arr.length - 1; i > 0; i--) { 
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [arr[j], arr[i]] = [arr[i], arr[j]]; 
  //   }
  //   return arr;
  // };
  
  // shuffle(quiz)
  // const shuffledChoices = shuffle(quiz[i].c);

  //                   shuffledChoices.forEach(choice => { 
  //                     const li = document.createElement('li');
  //                     li.textContent = choice;
  //                     choices.appendChild(li);
  //                   });