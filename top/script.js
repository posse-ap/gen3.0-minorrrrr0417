

const buttonOpen = document.getElementById('modalOpen');

const modalContent = document.getElementById('logoList-js');

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

