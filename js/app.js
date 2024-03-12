// footer
function year() {
  let date = new Date().getFullYear();
  return date;
}

let footer_congregation = document.getElementById("footer");
footer_congregation.innerText = "Congregación Solymar " + year();
