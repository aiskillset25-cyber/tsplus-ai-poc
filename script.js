document.addEventListener("DOMContentLoaded", () => {
  // Find ALL carousels on the page (top + Omnilingual)
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll(".slide");
    if (!slides.length) return;

    let i = 0;

    // Ensure each carousel starts with only its first slide active
    slides.forEach((s, idx) => s.classList.toggle("active", idx === 0));

    setInterval(() => {
      slides[i].classList.remove("active");
      i = (i + 1) % slides.length;
      slides[i].classList.add("active");
    }, 3500);
  });
});
