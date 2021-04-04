// THIS is file for trials and errors
const headerNavBtnGroup = document.querySelector(".header__nav-btn-group");
const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".header__nav-search-btn");
const closeBtn = document.querySelector(".header__nav-close-btn");
// to distinguish elems (get elems if contains the propetry, make responsive with css)
// const searchBtn = searchBtnElems.classList.contains("background:url(/img/search-icon.svg);")
// const closeBtn = searchBtnElems.classList.contains("background:url(/img/close-icon.svg);")

const btnContact = document.querySelectorAll(".btn-contact");
const contactForm = document.querySelector(".contact-form");
const contactFormWrapper = document.querySelector(".contact-form-wrapper");
const contactFormCloseBtn = document.querySelector(".contact-form__close-btn");
const overlay = document.querySelector(".overlay");


// === header search-box ===
searchBtn.addEventListener("click", () => {
  searchBox.classList.add("active");
  headerNavBtnGroup.classList.add("active");
})
closeBtn.addEventListener("click", () => {
  searchBox.classList.remove("active");
  headerNavBtnGroup.classList.remove("active");
})

console.log(btnContact); //what at querySelectorAll (arr with you elems)


// === contactForm === 
const closeModal = function (event) {
  target = event.target;
  // keyDown = this.event.code;
  // console.log(keyDown);
  if (target === overlay || target === contactFormCloseBtn || this.event.code === 'Escape') {
    console.log(target);
    contactFormWrapper.classList.remove("active");
  }
  document.removeEventListener('keydown', escapeHandler); //removeEventListener for Esc (to not listen after closeModal) 
}
const openModal = function (event) {
  target = event.target;
  // console.log(target);
  if (target.classList.contains('.btn-contact')) {
    console.log(1);
  }
  // console.log(target);               // check: what block are you click at?
  contactFormWrapper.classList.add("active");
  document.addEventListener('keydown', escapeHandler);
}

//press Esc => closeModal
const escapeHandler = (event) => {
  // console.log('hello');            // check: is keydown? 
  console.log(event.code);
  if (event.code === 'Escape') {
    closeModal(event);          //!WRONG closeModal();
  };
};

btnContact.forEach((element) => { //? how to work with querySelectorAll? = .forEach
  element.addEventListener("click", openModal);
})
contactFormWrapper.addEventListener("click", closeModal);

