const developmentMode = true;

const elements = {
  descomplicada: document.getElementById("descomplicada"),
  gestaoEmpresarial: document.getElementById("gestao-empresarial"),
  logo: document.getElementById("logo"),
  hero: document.getElementById("hero"),
  svgLogo: document.getElementsByTagName("svg")[0],
  heroMainText: document.getElementById("hero-main-text"),
  content: document.getElementById("content"),
  mainHero: document.getElementById("main-hero"),
  mainLogo: document.getElementById("main-logo"),
  description: document.getElementById("description"),
  verMais: document.getElementById("ver-mais"),
};

// const runAnimations = developmentMode
//   ? confirm("Executar animações iniciais?")
//   : true;

const runAnimations = true;

function animate(element, ...animationClass) {
  element.classList.add(...animationClass);
}

function removeAnimation(element, ...animationClass) {
  element.classList.remove(...animationClass);
}

function hingeComplicada() {
  animate(elements.descomplicada, "animate__hinge");
}

function restoreDescomplicada() {
  changeComplicadaToDescomplicada();
  changeDescomplicadaFont();
  changeColor(elements.gestaoEmpresarial);
  changeBackground();
  appearLogo();
  removeAnimation(elements.descomplicada, "animate__hinge");
  animate(elements.descomplicada, "animate__backInUp");
}

function changeComplicadaToDescomplicada() {
  elements.descomplicada.innerText = "descomplicada";
}

function changeDescomplicadaFont() {
  elements.descomplicada.style.fontFamily = "Urbanist";
  elements.descomplicada.style.letterSpacing = "-1px";
  elements.descomplicada.classList.remove("italic");
  elements.descomplicada.style.color = "black";
}

function changeBackground() {
  elements.hero.classList.add("clarify-bg");
}

function changeColor(element) {
  element.classList.add("make-it-blue");
}

function appearLogo() {
  elements.svgLogo.classList.add("make-it-appear");
}

function moveLogoDown() {
  elements.logo.classList.add("move-logo-down");
}

function removeFirstContent() {
  removeAnimation(elements.heroMainText, "animate__fadeInUp");
  animate(elements.heroMainText, "animate__fadeOutDown");
  moveLogoDown();
}

function transitionToMainContent() {
  elements.hero.style.display = "none";
  removeAnimation(elements.logo, "move-logo-down");
  elements.logo.style.top = "44%";
  animate(elements.logo, "animate__bounceOut");
}

function showMainContent() {
  document.body.removeChild(logo);
  document.body.removeChild(hero);
  elements.content.style.display = "block";
  animate(elements.mainHero, "animate__animated", "animate__fadeIn");
  document.body.style.overflow = "visible";
}

function fadeInLeftMainHero() {
  elements.mainLogo.display = "block";
  animate(elements.mainLogo, "animate__animated", "animate__fadeInLeft");
  elements.description.display = "block";
  animate(elements.description, "animate__animated", "animate__fadeInLeft");
  elements.verMais.display = "block";
  animate(elements.verMais, "animate__animated", "animate__fadeInLeft");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runAnimationsSequence() {
  if (runAnimations) {
    await sleep(2000);
    hingeComplicada();
    await sleep(3000);
    restoreDescomplicada();
    await sleep(3000);
    removeFirstContent();
    await sleep(2000);
    transitionToMainContent();
    await sleep(500);
    showMainContent();
    await sleep(500);
    fadeInLeftMainHero();
  } else {
    hingeComplicada();
    restoreDescomplicada();
    removeFirstContent();
    transitionToMainContent();
    showMainContent();
    await sleep(500);
    fadeInLeftMainHero();
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInLeft");
      entry.target.offsetWidth;
    }
  });
});

document.querySelectorAll(".animate-on-scroll").forEach((element) => {
  observer.observe(element);
});

runAnimationsSequence();
