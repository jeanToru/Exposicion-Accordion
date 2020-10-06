const elemento = document.getElementsByClassName("accordion");
const panel = document.getElementsByClassName("panel");

for (let i = 0; i < panel.length; i++) {
  panel[i].classList.add('oculto');
}

for (let i = 0; i < elemento.length; i++) {
  elemento[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}