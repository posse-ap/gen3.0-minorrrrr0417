

const buttonOpen = document.getElementById('modalOpen');

const modalContent = document.getElementById('logoList-js');

// const lineContent = document.getElementsById('fixedBanner-js');

let clickCount = 0

// クリック回数によって動作を分岐
function hamburger(){
modal.addEventListener('click', () => {
    clickCount += 1
    if (clickCount % 2 ==1) {
        $(".openbtn2").toggleClass('active');
        modalContent.classList.add('flex');
        const closebutton = document.getElementsByClassName('.active');
    }else{
      closebutton.classList.remove('flex')
    }
})
}

// function button(){
//   let i =0;
//   let thisCount = i;
//       thisCount = Number(thisCount);
//       thisCount = thisCount + 1;
//       console.log(thisCount);
  
//       if(thisCount %2==1){
//     buttonOpen.addEventListener('click', hamburger);
//   $(".openbtn2").toggleClass('active');
//   modalContent.classList.add('flex');
//   const closebutton = document.getElementsByClassName('.active');
//   // modal.style.display = 'block';
//   }else{

// closebutton.addEventListener('click',() =>{
  
//   closebutton.classList.remove('flex');
// })
//   }
// }
// button();




// ボタンがクリックされた時
// buttonOpen.addEventListener('click', hamburger);
// function hamburger() {
//   $(".openbtn2").toggleClass('active');
//   modalContent.classList.add('flex');

// }
// hamburger();

// バツ印がクリックされた時
// const closebutton = document.getElementsByClassName('.active')
// closebutton.addEventListener('click',() =>{
  
//   closebutton.classList.remove('flex');
// })


// クリックしたらFlexのクラス除去
// }

// モーダルコンテンツ以外がクリックされた時
// addEventListener('click', outsideClose);
// function outsideClose(e) {
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// }
