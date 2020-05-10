var link = document.querySelector(".contacts__button");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal__close");
var name = popup.querySelector("[name=user-name]");;
var email = popup.querySelector("[name=user-email]");
var text = popup.querySelector("[name=user-text]");
var form = popup.querySelector(".modal__form");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");
  var name = popup.querySelector("[name=user-name]");
  var email = popup.querySelector("[name=user-email]");
  if (storage) {
    name.value = storage;
    email.focus();
    console.log(name);
  } else {
    name.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal__show");
  popup.classList.remove("modal__error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal__error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal__error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal__show")) {
      popup.classList.remove("modal__show");
      popup.classList.remove("modal__error");
    }
  }
});
