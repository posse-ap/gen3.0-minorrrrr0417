

const buttonOpen = document.getElementById('modalOpen');

const modalContent = document.getElementById('logoList-js');

// const lineContent = document.getElementsById('fixedBanner-js');


// ボタンがクリックされた時
buttonOpen.addEventListener('click', hamburger);
function hamburger() {
  $(".openbtn2").toggleClass('active');
  modalContent.classList.add('flex');
  // modal.style.display = 'block';
}
// hamburger();

// バツ印がクリックされた時

buttonClose.addEventListener('click',() =>{
  const closebutton = document.getElementsByClassName('.active')
  c.classList.remove('flex');
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
