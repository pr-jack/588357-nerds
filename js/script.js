var link = document.querySelector(".btn-contacts");

var popup = document.querySelector(".modal-feedback");

var close = document.querySelector(".modal-close");

var username = popup.querySelector("[name=username]");

var email = popup.querySelector("[name=email]");

var form = popup.querySelector("form");

var isStorageSupport = true;

var storage = "";
	try {
	storage = localStorage.getItem("username");
	} catch (err) {
		isStorageSupport = false;
	}
	  
link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (storage) {
		username.value = storage;
	email.focus();
	} else {
		username.focus();
	}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});

form.addEventListener("click", function (evt) {
	if (!username.value || !email.value) {
		evt.preventDefault();
	popup.classList.add("modal-error");
	}else {
		if (isStorageSupport) {
			localStorage.setItem("username", username.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
	if (popup.classList.contains("modal-show")) {
		popup.classList.remove("modal-show");
	}
}});