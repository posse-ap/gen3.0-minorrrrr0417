'use strict';
// ハンバーガー

const buttonOpen = document.getElementById('modalOpen');

const modalContent = document.getElementById('logoList-js');
// const modalBtn = document.getElementsByClassName('button');

function hamburger(){
modalOpen.addEventListener('click', () => {
  modalOpen.classList.toggle('active');
    if (!(modalContent.classList.contains('flex'))) {
      modalContent.classList.add('flex');
        }else{
          modalContent.classList.remove('flex');
    }
})
}
hamburger();

// ハンバーガーここまで


let quiz =[
  {
    number: 1,
    question: "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
    picture: 0,
    answerArray:['約28万人', '約79万人', '約183万人'],
    quote: "経済産業省 2019年3月 - IT 人材需給に関する調査"
  },
  
  {
    number: 2,
    question: "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
    picture: 0,
    answerArray:['INTECH', 'BIZZTECH', 'X-TECH'],
    correctAnswer: "X-TECH",
  },
  {
    number: 3,
    question: "IoTとは何の略でしょう？",
    picture: 0,
    answerArray:['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
    correctAnswer: "Internet of Things",
  },
  {
    number: 4,
    question: "日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？",
    picture: 0,
    answerArray:['Society 5.0', 'CyPhy', 'SDGs'],
    correctAnswer: "Society 5.0",
    quote: "Society5.0 - 科学技術政策 - 内閣府"
  },
  {
    number: 5,
    question: "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
    picture: 0,
    answerArray:['Web3.0', 'NFT', 'メタバース'],
    correctAnswer: "Web3.0",
  },
  {
    number: 6,
    question: "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？",
    picture: 0,
    answerArray:['約2倍', '約5倍', '約11倍'],
    correctAnswer: "約5倍",
    quote: "Technology Vision 2021"
  },
]

const array = quiz.slice()

  function shuffle(arr) {
  for ( let i = 0; i < array.length ; i++) {
    const k = array.length-1;
    const j = Math.floor(Math.random() * k);
    [array[j], array[k]] = [array[k], array[j]];
  }
  return array;
};
const quizArray =shuffle(quiz)

const createQuizHtml = (quizItem, questionNumber) => {
  
  for(let i = array.length - 1; i >= 0; i--) {
      quizItem.answerArray.forEach((option,index)=>{
        const j = Math.floor(Math.random()*(index));
        [quizItem.answerArray[j], quizItem.answerArray[index]] = [quizItem.answerArray[index], quizItem.answerArray[j]];
      })
    }
  
  const answerHtml = quizItem.answerArray.map((i)=>{
    return `<li>`
          +`<button class="quizChoice quizChoice${i}" id="option${i}-1" >${i}</button>`
          +`<i class="iconArrow"><img src="/img/icon/icon-arrow.svg" alt=""></i>`   
          +`</li>`
    }).join('')

  return `<div class="quizWrapper">`
                      +`<div class="quizContents">`                 
                        +`<h2 class="quizNumber" id="question_number_js"> Q${questionNumber+1}</h2>`
                        +`<h4 class="quizDescription">${quizItem.question}</h4>`
                      +`</div>`
                      +`<div class ="quizPeople">`
                        +`<img src='/quiz.writing/img copy/quiz/img-quiz0${quizItem.number}.png'>`
                      +`</div>`
                      +`<div class="quizAnswer">A</div>`
                      +`<ul class="quizAnswerWrapper">${answerHtml}</ul>` 
                      
                    +`<div class="correctWrapper" id="correctArea${questionNumber}">`
                      +`<div class="contentsPosition">`
                        +`<div class = "correct">正解！</div>`
                        +`<div class = "answerAreaPosition">`
                          +`<div class = "correctA">A</div>`
                          +`<div class = "correctAnswer" >${quizItem.correctAnswer}</div>`
                        +`</div>`
                      +`</div>`
                    +`</div>`
                    
                    +`<div class="wrongWrapper" id="wrongArea${questionNumber}">`
                      +`<div class="contentsPosition">`
                        +`<div class = "wrong">不正解...</div>`
                        +`<div class = "answerAreaPosition">`
                          +`<div class = "wrongA">A</div>`
                          +`<div class = "wrongAnswer">${quizItem.correctAnswer}</div>`
                        +`</div>`
                      +`</div>`
                    +`</div>`
                    +`<div>${quote_area(questionNumber)}</div>`
                    +`</div>`;
}


// 引用
let quote_html
function quote_area(i){
    quote_html =`<div class="quizCiteBox">`
                    +`<img src="/img/icon/icon-note.svg" alt="">`
                    +`<div class="referenceArea">${quiz[i].quote}</div>`
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
  
const quiz_area = document.getElementById("quizSection");
  
  quiz_area.innerHTML = quizArray.map((quizItem, questionNumber) => {
    return createQuizHtml(quizItem, questionNumber)
  }).join('');



