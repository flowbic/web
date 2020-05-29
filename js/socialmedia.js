let facebook = document.getElementById("facebook");
let instagram = document.getElementById("instagram");
let github = document.getElementById("github");
let linkedin = document.getElementById("linkedin");

// social media team
let carlLinkedIn = document.getElementById("linkedInCarl");
let carlGithub = document.getElementById("carlGithub");

let joelLinkedIn = document.getElementById("linkedInJoel");
let joelGithub = document.getElementById("JoelGithub");

let davidLinkedIn = document.getElementById("davidLinkedIn");
let davidGithub = document.getElementById("davidGithub");

let karlGithub = document.getElementById("karlGithub");

let marcusLinkedIn = document.getElementById("marcusLinkedIn");
let marcusGithub = document.getElementById("marcusGithub");
let marcusInstagram = document.getElementById("marcusInstagram");

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

// Teams social links
carlLinkedIn.addEventListener("click", () => {
  openInNewTab("linkedin.com/in/carl-ejnarsson-aa79941a9");
});

carlGithub.addEventListener("click", () => {
  openInNewTab("https://github.com/cccarle");
});

joelLinkedIn.addEventListener("click", () => {
  openInNewTab("https://www.linkedin.com/in/joel-carlsson-560167178/");
});

joelGithub.addEventListener("click", () => {
  openInNewTab("https://github.com/joelcarlss");
});

davidLinkedIn.addEventListener("click", () => {
  openInNewTab("https://www.linkedin.com/in/david-sturesson-1745b71aa/");
});

davidGithub.addEventListener("click", () => {
  openInNewTab("https://github.com/upptaget");
});

karlGithub.addEventListener("click", () => {
  openInNewTab("https://github.com/ke222pf");
});

marcusLinkedIn.addEventListener("click", () => {
  openInNewTab("https://www.linkedin.com/in/marcus-thuresson-b6b59719a/");
});

marcusGithub.addEventListener("click", () => {
  openInNewTab("https://github.com/mckhaannn");
});

marcusInstagram.addEventListener("click", () => {
  openInNewTab("https://www.instagram.com/marcusthuressonn/");
});

const openInNewTab = (url) => {
  var win = window.open(url, "_blank");
  win.focus();
};
