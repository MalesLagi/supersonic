// Efek scroll animasi sederhana
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});

// Tambahkan animasi CSS
const style = document.createElement('style');
style.innerHTML = `
section {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
}
section.visible {
  opacity: 1;
  transform: translateY(0);
}
`;
document.head.appendChild(style);
