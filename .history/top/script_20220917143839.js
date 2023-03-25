// $(".openbtn2").click(function () {
//   $(this).toggleClass('active');

// });

const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];
const modalContent = document.getElementById('logoList-js');
// const lineContent = document.getElementsById('fixedBanner-js');

// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
  
  modalContent.classList.add('flex');
  // lineContent.classList.add('flex');
}

// バツ印がクリックされた時
buttonClose.addEventListener('click', modalClose);
function modalClose() {
  buttonClose.classList.('
  // modal.style.display = 'none';
}

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
