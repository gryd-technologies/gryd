const descomplicada = document.getElementById("descomplicada");
const gestaoEmpresarial = document.getElementById("gestao-empresarial");
const logo = document.getElementById("logo");
const hero = document.getElementById("hero");
const svgLogo = document.getElementsByTagName('svg')[0];

function firstAnimation() {
  descomplicada.classList.add("animate__hinge");
}

function secondAnimation() {
  changeContent();
  changeFont();
  changeColor(gestaoEmpresarial);
  changeBackground();
  appearLogo();
  descomplicada.classList.remove("animate__hinge");
  descomplicada.classList.add("animate__backInUp");
}

function changeContent() {
  descomplicada.innerText = "descomplicada";
}

function changeFont() {
  descomplicada.style.fontFamily = "Urbanist";
  descomplicada.style.letterSpacing = "-1px";
  descomplicada.classList.remove("italic");
  descomplicada.style.color = 'black';
}

function changeBackground() {
  hero.classList.add("clarify-bg");
}

function changeColor(element) {
  element.classList.add("make-it-blue");
}

function appearLogo() {
  svgLogo.classList.add('make-it-appear');
}

setTimeout(firstAnimation, 2000);
setTimeout(secondAnimation, 5000);
