document.addEventListener("DOMContentLoaded", () => {

  /* Original carousel (top one) */
  const mainCarousel = document.querySelector(".carousel");
  if (mainCarousel) {
    const slides = mainCarousel.querySelectorAll(".slide");
    let i = 0;

    setInterval(() => {
      slides[i].classList.remove("active");
      i = (i + 1) % slides.length;
      slides[i].classList.add("active");
    }, 3500);
  }

  /* Omnilingual carousel (new one) */
  const omniCarousel = document.querySelector('[data-carousel="omnilingual"]');
  if (omniCarousel) {
    const track = omniCarousel.querySelector(".carousel-track");
    const slides = omniCarousel.querySelectorAll(".carousel-slide");
    let index = 0;

    setInterval(() => {
      index = (index + 1) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
    }, 3500);
  }

});
