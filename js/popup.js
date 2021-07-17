const button = document.querySelector(".button-contacts");
const modal = document.querySelector(".modal");
const close = modal.querySelector(".modal-close");
const form = modal.querySelector(".send-us-form");
const loginIconName = modal.querySelector(".login-icon-name");
const loginIconEmail = modal.querySelector(".login-icon-email");
let isStorageSupport = true;
let storage = "";
try {
    storage = localStorage.getItem("name");
    storage = localStorage.getItem("email");

} catch (err) {
    isStrongeSupport = false;
}


button.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
    loginIconName.focus();


    if (stronge) {
        loginIconName.value = storage;
        loginIconEmail.value = storage;
    } else {
        loginIconName.focus();
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
    modal.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
    if (!loginIconName.value || !loginIconEmail.value) {
        evt.preventDefault();
        modal.classList.remove("modal-error");
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", loginIconName.value);
            localStorage.setItem("email", loginIconEmail.value);
        }
    }
});
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modal.classList.contains("modal-show")) {
            evt.preventDefault();
            modal.classList.remove("modal-show");
            modal.classList.remove("modal-error");
        }
    }
});