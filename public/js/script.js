// Menangani modal untuk detail proyek
const cards = document.querySelectorAll(".card");
const modal = document.getElementById("projectModal");
const closeBtn = document.querySelector(".close");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    modalTitle.innerText = card.querySelector("h3").innerText;
    modalDescription.innerText = card.querySelector("p").innerText;
    modal.style.display = "block";
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Menampilkan tombol "Kembali ke Atas"
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "Kembali ke Atas";
backToTopBtn.className = "back-to-top";
document.body.appendChild(backToTopBtn);

backToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};
