const popupBtnOpen = document.querySelector('#popup-btn-open');
const popupBtnClose = document.querySelector('#popup-btn-close');
const popup = document.querySelector('#popup');
const accordionBtn = document.querySelector('#accordion-btn');
const accordion = document.querySelector('#accordion');

const start = () => {
  popupBtnOpen.addEventListener('click', togglePopUp);
  popupBtnClose.addEventListener('click', togglePopUp);
  accordionBtn.addEventListener('click', toggleAccordion);
}

const togglePopUp = () => {
  popup.classList.toggle('popup-open');
}

const toggleAccordion = () => {
  accordion.classList.toggle("active");
  accordionBtn.classList.toggle("active");
  const span = accordionBtn.children[0];

  if (accordion.style.maxHeight){
    accordion.style.maxHeight = null;
    span.innerHTML = '+';
  } else {
    span.innerHTML = '-';
    accordion.style.maxHeight = accordion.scrollHeight + "px";
  }
}


document.addEventListener('DOMContentLoaded', start);
