

const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];
const modalContent = document.getElementById('logoList-js');

// const lineContent = document.getElementsById('fixedBanner-js');


// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
  $(".openbtn2").toggleClass('active');
  modalContent.classList.add('flex');
  // modal.style.display = 'block';
}
// modalOpen();

// バツ印がクリックされた時
const closebutton = document.getElementsByClassName('.active')
buttonClose.addEventListener('click',() =>{
  const closebutton = document.getElementsByClassName('.active')
  modalContent.classList.remove('flex');
})


// クリックしたらFlexのクラス除去
// }

// モーダルコンテンツ以外がクリックされた時
// addEventListener('click', outsideClose);
// function outsideClose(e) {
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// }
