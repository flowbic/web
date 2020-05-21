var modal = document.getElementById("myModal");

// Get the button that opens the modal
var ok_gdpr_btn = document.getElementById("ok_gdpr_button");
var read_more_cookie_btn = document.getElementById("read_more_cookie_btn");

ok_gdpr_btn.addEventListener("click", () => {
  modal.style.display = "none";
});

read_more_cookie_btn.addEventListener("click", () => {
  window.location.replace("/datastorage");
});

/* 
Körs när sidan laddas, IF cookies visa inte popup else visa popup
*/
window.onload = function (event) {
  console.log(event);
  //   if (COOKIE) {
  //     modal.style.display = "none";
  //   } else {
  //  modal.style.display ="visible"
  //      }
};
