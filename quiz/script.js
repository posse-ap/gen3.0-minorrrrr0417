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
                      +`<img src='/img/quiz/${i}.png' class="quizOneImg">`
                    +`</div>`
                    +`<div class="quizAnswer">A</div>`
                      +`<ul class="quizAnswerWrapper">`
                        +`<li>`
                          +`<button class="quizChoice" >${quiz[i].option1}</>`
                          +`<i class="iconArrow"><img src="/img/icon/icon-arrow.svg" alt=""></i>`   
                        +`</li>`
                        +`<li>`
                          +`<button class="quizChoice" >${quiz[i].option2}</>`
                          +`<i class="iconArrow"><img src="/img/icon/icon-arrow.svg" alt=""></i>`   
                        +`</li>`
                        +`<li>`
                          +`<button class="quizChoice" >${quiz[i].option3}</button>`
                          +`<i class="iconArrow"><img src="/img/icon/icon-arrow.svg" alt=""></i>`   
                        +`</li>`
                      +`</ul>` 
                      +`<div id="answerWrapper">`
                      +`<div class="correctWrapper">`
                      +`<div class = "correct">正解！</div>
                      <div class = "correctA">A</div>
                      <div class = "correctAnswer">${quiz[i].answer}</div>
                    </div>`
                    +`<div class="wrongWrapper">`
                    +`<div class = "wrong">不正解！</div>`
                    +`<div class = "wrongA">A</div>`
                    +`<div class = "wrongAnswer">${quiz[i].answer}</div>`
                  +`</div>`
                    +`</div>` 
                      +`<div>${quote_area(i)}</div>`
                    +`</div>`;

  return quiz_area.insertAdjacentHTML("beforeend",quiz_html);
  
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
// let correct_choice;
const correct_choice =quiz.answer   

// let correct_html = `<div class="correctWrapper">
//                       <div class = "correct">正解！</div>
//                       <div class = "correctA">A</div>
//                       <div class = "correctAnswer">${selectedAnswerNumber}</div>
//                     </div>`;



// let wrong_html = `<div class="wrongWrapper">
//                     <div class = "wrong">正解！</div>
//                     <div class = "wrongA">A</div>
//                     <div class = "wrongAnswer">${selectedAnswerNumber}</div>
//                   </div>`;





// quiz.forEach(question => {
  const buttons = document.querySelectorAll(`.quizChoice`);
  const answer_area = document.getElementById(`answerWrapper`);
  // const question_number = document.getElementById(`question_number_js`);
  
  buttons.forEach(button =>{

    button.addEventListener(`click`, () => {
      button.classList.add(`is-selected`);
      
      // setDisabled(answers);
      // const correctAnswer = ALL_QUIZ[question_number].correctNumber
      //   if ( correctAnswer === selectedAnswerNumber){
      //     main.insertAdjacentHTML(beforeend,correct_html)
      //   }else{
      //     main.insertAdjacentHTML(beforeend,wrong_html)
      //   };
    })
    // forEach(answer);
  })


  
//   if (event.target===quiz.answer){
//   return correct_html;
// }else{
//   return wrong_html;
// }


// })
for(let i = 0; i < quiz.length; i++) { 
  create_quiz(i);
  }
// forEach(quiz);
// function option_btn(i){
//   correct_choice= quiz[i].answer;
//   btn.onclick = function() {
    
    
//     btn.forEach(()=>{
//         i.addEventLister('click', () =>{
//           const clicked_choice =i.correct_html;
  
//             if (btn_clicked === correct ){
//               return correct_html;
//               // correct.classList.add('js-on');
//               }
//         })
//       })
//   };
  
// }
// function 
// quiz.foreach((quiz)=> console.log(quiz[3]));





// create_quiz(1);






// function create(question_id,question,option_array,answer_id,refer_id){
//   const main = document.getElementById("main");
//   let quiz = `<div class="quizWrapper">`
//                 +`<div class="quizContents">`
//                 +`<h2 class="quizNumber">Q${question_id}</h2>`
//                 +`<h4 class="quizDescription">${question}</h4>`
//                 +`</div>`
//                 +`<div class ="quizPeople">`
//                 +`<img src='/img/quiz/${question_id}.png' class="quizOneImg">`
//                 +`</div>`
//                 +`<div class="quizAnswer">A</div>`
//                 +`<ul class="quizAnswerWrapper">`
                
//                 ;
                
  
  
  




// function select(question_id,option_id,answer_id){
//   const choice = document.querySelector(`.list_${question_id}_${option_id}`)
//   console.log(choice)
//     if( option_id ===answer_id){
//         choice.style.backgroundColor = "red"
        
//     }else{
        
//         choice.style.backgroundColor = "blue"
//     }
//     // {once: true}
    
// }
// // main.insertAdjacentHTML("beforeend",choice);




// create_quiz(0);

// btn.forEach((e) => {
//   e.addEventListener('click', () => {
//     const clickedAnswer = e.innerHTML;

//     if(btnClicked !== true) {
//       e.classList.add('js-selected');
//       if(clickedAnswer === quizAnswer) {
//         correct.classList.add('js-on');
//       }
//       else {
//         wrong.classList.add('js-on');
//       };
//     };

//     btnClicked = true;
//   });
// });
// ;