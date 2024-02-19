function menuShow() {
  let menuArea = document.getElementById("menu-area");

  if (menuArea.style.height == "70vw") {
    menuArea.style.height = "0vw";
  } else {
    menuArea.style.height = "70vw";
  }
}
