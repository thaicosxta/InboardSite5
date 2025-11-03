// ===== Modais =====
const modais = document.querySelectorAll(".modal");
const closes = document.querySelectorAll(".close");
const modalInboard = document.getElementById("modalInboard");
const btnSaibaMais = document.getElementById("btnSaibaMais");

btnSaibaMais.addEventListener("click", () => modalInboard.style.display = "flex");

closes.forEach(c => c.addEventListener("click", () => {
  c.closest(".modal").style.display = "none";
}));

window.addEventListener("click", e => {
  if (e.target.classList.contains("modal")) e.target.style.display = "none";
});

// ===== Funciona Cards =====
document.querySelectorAll(".funciona-card").forEach(card => {
  card.addEventListener("click", () => {
    const modal = document.getElementById(card.dataset.modal);
    modal.style.display = "flex";
  });
});

// ===== Simulação =====
const modalSimulacao = document.getElementById("modalSimulacao");
document.querySelectorAll(".assinar-btn").forEach(btn => {
  btn.addEventListener("click", () => modalSimulacao.style.display = "flex");
});
document.getElementById("btnSimular").addEventListener("click", () => {
  const n = document.getElementById("colaboradores").value;
  const preco = n ? (n * 25).toFixed(2) : 0;
  document.getElementById("resultadoSimulacao").textContent =
    n ? `Valor estimado: R$ ${preco}` : "Insira uma quantidade válida.";
});

// ===== Acessar Plataforma =====
document.getElementById("btnAcessar").addEventListener("click", () => {
  window.location.href = "https://inboard5.vercel.app/";
});

// ===== Carrossel =====
const track = document.querySelector(".carousel-track");
const cards = Array.from(track.children);
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
let currentSlide = 0;

function updateCarousel() {
  const width = cards[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentSlide * width}px)`;
}

nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % cards.length;
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + cards.length) % cards.length;
  updateCarousel();
});
