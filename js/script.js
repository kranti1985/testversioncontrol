// Tab Navigation
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".content-section");
let currentIndex = 0;

function showSection(index) {
  sections.forEach(sec => sec.classList.remove("active"));
  sections[index].classList.add("active");
  currentIndex = index;
}

// Nav link click
navLinks.forEach((link, idx) => {
  link.addEventListener("click", e => {
    e.preventDefault();
    showSection(idx);
  });
});

// Previous button
const prevBtn = document.getElementById("prevBtn");
prevBtn.addEventListener("click", () => {
  let newIndex = currentIndex - 1;
  if (newIndex < 0) newIndex = sections.length - 1; // loop back to last
  showSection(newIndex);
});