// --- Const ---
const headerNavBtnGroup = document.querySelector(".header__nav-btn-group");
const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".header__nav-search-btn");
const closeBtn = document.querySelector(".header__nav-close-btn");

const btnContact = document.querySelectorAll(".btn-contact");
const contactForm = document.querySelector(".contact-form");
const contactFormWrapper = document.querySelector(".contact-form-wrapper");
const contactFormCloseBtn = document.querySelector(".contact-form__close-btn");
const contactFormBtnSubmit = document.querySelector(".contact-form__btn-submit");
const overlay = document.querySelector(".overlay");


// --- Func ---
// === header search-box === //* делегирование?
const closeSearch = function (event) {
  target = event.target;
  btnContact.forEach((element) => {
    //? how to work with querySelectorAll? = .forEach
    for (let i = 0; i < btnContact.length; i++) {
      // when "click" on btnContact -> closeSearch
      const element = btnContact[i];
      // console.log(btnContact.length);
      // console.log(element);
      if (event.target === element) {
        searchBox.classList.remove("active");
        headerNavBtnGroup.classList.remove("active");
      }
    }
  });
  if (target === closeBtn || target === btnContact) {
    searchBox.classList.remove("active");
    headerNavBtnGroup.classList.remove("active");
  }
};
const openSearch = function (event) {
  target = event.target;
  if (target === searchBtn) {
    searchBox.classList.add("active");
    headerNavBtnGroup.classList.add("active");
  }
};

console.log(btnContact); //what at querySelectorAll (arr with you elems)

// === contactForm ===
const closeModal = function (event) {
  target = event.target;
  if (
    target === overlay ||
    target === contactFormCloseBtn ||
    target === contactFormBtnSubmit ||
    event.code === "Escape"
  ) {
    console.log(target);
    contactFormWrapper.classList.remove("active");
  }
  document.removeEventListener("keydown", escapeHandler); //removeEventListener for Esc (to not listen after closeModal)
};
const openModal = function (event) {
  target = event.target;
  // console.log(target);               // check: what block are you click at?
  contactFormWrapper.classList.add("active");
  document.addEventListener("keydown", escapeHandler);
};

//press Esc => closeModal
const escapeHandler = (event) => {
  // console.log('hello');            // check: is keydown?
  console.log(event.code);
  if (event.code === "Escape") {
    closeModal(event); //!WRONG closeModal();
  }
};


// --- EventListener ---
btnContact.forEach((element) => {
  //? how to work with querySelectorAll? = .forEach
  element.addEventListener("click", openModal);
  element.addEventListener("click", closeSearch);
});
contactFormWrapper.addEventListener("click", closeModal);

searchBtn.addEventListener("click", openSearch);
closeBtn.addEventListener("click", closeSearch);
