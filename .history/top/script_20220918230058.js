

const buttonOpen = document.getElementById('modalOpen');

const modalContent = document.getElementById('logoList-js');

// const lineContent = document.getElementsById('fixedBanner-js');

let clickCount = 0

// クリック回数によって動作を分岐
function hamburger(){
modalOpen.addEventListener('click', () => {
  $(".openbtn2").toggleClass('active');
    if (!(modalContent.classList.contains('flex'))) {
      modalContent.classList.add('flex');
      
        }else{
          modalContent.classList.remove('flex');
    }
})
}
hamburger();

