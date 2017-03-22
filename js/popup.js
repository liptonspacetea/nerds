var link = document.querySelector(".write-us-btn");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".close-btn");
var user = popup.querySelector("#name");
var email = popup.querySelector("#email");
var message = popup.querySelector("#message");
       
link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
//    user.focus();
});
       
close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
        }
    }
});