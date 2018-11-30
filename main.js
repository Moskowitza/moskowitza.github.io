var h = window.innerHeight;
console.log(h);
const header = document.getElementById("header");
const logo = document.getElementById("logo");
header.setAttribute("style", "height:" + h + "px;");

window.addEventListener("scroll", function() {
  console.log("scrolled");
  header.setAttribute("style", `height:${h / 3}px;`);
  logo.setAttribute("style", "font-size: 4rem;");
});
