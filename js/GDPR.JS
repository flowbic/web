var modal = document.getElementById("myModal");

// Get the button that opens the modal
var ok_gdpr_btn = document.getElementById("ok_gdpr_button");
var ok_btn_storage = document.getElementById("ok_gdpr_button_datastorage");
var read_more_cookie_btn = document.getElementById("read_more_cookie_btn");

if (ok_btn_storage) {
  ok_btn_storage.addEventListener("click", () => {
    localStorage.setItem("cookieButton", JSON.stringify(true));
    window.location.replace("./");
  });
}

ok_gdpr_btn.addEventListener("click", () => {
  modal.style.display = "none";
  localStorage.setItem("cookieButton", JSON.stringify(true));
});

read_more_cookie_btn.addEventListener("click", () => {
  window.location.replace("./datastorage");
});

/* 
Körs när sidan laddas, IF cookies visa inte popup else visa popup
*/
window.onload = function (event) {
  var cookieButton = localStorage.getItem("cookieButton");
  if (cookieButton) {
    modal.style.display = "none";
  } else {
    modal.style.display = "";
  }
};
