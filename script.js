const menuToggle = document.querySelector(".menu-toggle")
const nav = document.querySelector(".nav")

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active")
})

function closeMenu() {
  nav.classList.remove("active")
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".header")) {
    closeMenu()
  }
})

document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menuButton")
  var menuContent = document.getElementById("menuContent")

  menuButton.addEventListener("click", function () {
    if (menuContent.style.display === "block") {
      menuContent.style.display = "none"
    } else {
      menuContent.style.display = "block"
    }
  })
})

// script.js
// Function to show a specific section based on the URL hash
function showSection() {
  let hash = location.hash.substr(1)
  document.querySelectorAll("section").forEach((section) => {
    if (section.id === hash) {
      section.style.display = "block"
    } else {
      section.style.display = "none"
    }
  })
}

// Event listener to call the showSection function on hashchange
window.addEventListener("hashchange", showSection)

// Call showSection function on page load
showSection()

let slideIndex = 0
showSlides()

function showSlides() {
  let i
  const slides = document.getElementsByClassName("slides")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slideIndex++
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block"
  setTimeout(showSlides, 2000) // Altera a imagem a cada 2 segundos
}
