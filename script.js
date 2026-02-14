const questionEl = document.getElementById("question");
const stickerEl = document.getElementById("sticker");
const finalEl = document.getElementById("final");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", showStep);

const slides = [
  { text: "Hello Sarah, the love of my life 🌸", img: "imgs/imagen1.jpg" },
  { text: "My love for you started 340 days ago 🎐", img: "imgs/imagen2.jpg" },
  { text: "The more time i spend with you, the more i love you 🖤", img: "imgs/imagen3.jpg" },
  { text: "You'll forever be mine, my precious princess 🌺", img: "imgs/imagen4.jpg" },
  { text: "Happy Valentine's day, many more to come!  💌", img: "imgs/imagen5.jpg" },
];

let currentStep = 0;

function showStep() {
  if (currentStep < slides.length) {
    const slide = slides[currentStep];
    questionEl.textContent = slide.text;
    stickerEl.src = slide.img;
    stickerEl.classList.remove("hidden");
    currentStep++;
  } else {
    questionEl.classList.add("hidden");
    stickerEl.classList.add("hidden");
    finalEl.classList.remove("hidden");
    nextBtn.style.display = "none";
  }
}


showStep();

function createHearts(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 5 + Math.random() * 5 + "s";
    heart.style.animationDelay = Math.random() * 5 + "s";
    fragment.appendChild(heart);
  }
  document.body.appendChild(fragment)
}

createHearts(40)
