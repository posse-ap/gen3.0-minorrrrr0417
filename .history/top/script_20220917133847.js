// $(".openbtn2").click(function () {
//   $(this).toggleClass('active');

// });

const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const modal = document.getElementById('modal-content');
const buttonClose = document.getElementsByClassName('modalClose')[0];

// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
  modal.style.display = 'block';
  // modalOpen.classList.add('.flex')
}


// バツ印がクリックされた時
buttonClose.addEventListener('click', modalClose);
function modalClose() {
  modal.style.display = 'none';
}

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}