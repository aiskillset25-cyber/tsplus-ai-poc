document.addEventListener("DOMContentLoaded", () => {
  // Both carousels use the same structure: .carousel > img.slide
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll(".slide");
    if (slides.length === 0) return;

    let i = 0;

    // Make sure only the first slide is active in THIS carousel
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === 0);
    });

    setInterval(() => {
      slides[i].classList.remove("active");
      i = (i + 1) % slides.length;
      slides[i].classList.add("active");
    }, 3500);
  });
});
