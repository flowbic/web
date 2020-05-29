let facebook = document.getElementById("facebook");
let instagram = document.getElementById("instagram");
let github = document.getElementById("github");
let linkedin = document.getElementById("linkedin");

// facebook.addEventListener('click', () => {
//   openInNewTab('URL')
// })

github.addEventListener("click", () => {
  openInNewTab("https://github.com/flowbic");
});

instagram.addEventListener("click", () => {
  openInNewTab("https://www.instagram.com/flowbic.ab/");
});

linkedin.addEventListener("click", () => {
  openInNewTab("https://www.linkedin.com/company/flowbic/");
});

const openInNewTab = (url) => {
  var win = window.open(url, "_blank");
  win.focus();
};
