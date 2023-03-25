

const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];
const modalContent = document.getElementById('logoList-js');
const closebutton = document.getElementsByClassName('.active')
// const lineContent = document.getElementsById('fixedBanner-js');


// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
  $(".openbtn2").toggleClass('active');
  modalContent.classList.add('flex');
  // modal.style.display = 'block';
}
modalOpen();

// バツ印がクリックされた時
buttonClose.addEventListener('click');
modalContent.classList.('flex');

// クリックしたらFlexのクラス除去
// }

// モーダルコンテンツ以外がクリックされた時
// addEventListener('click', outsideClose);
// function outsideClose(e) {
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// }
