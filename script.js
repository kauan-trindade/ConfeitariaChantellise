let slideIndex = 0;

  function mostrarSlide(index) {
    const slides = document.querySelector(".slides");
    const totalSlides = slides.children.length;
    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - 1;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  function mudarSlide(n) {
    slideIndex += n;
    mostrarSlide(slideIndex);
  }

  // Auto-slide a cada 5 segundos
  setInterval(() => {
    slideIndex++;
    mostrarSlide(slideIndex);
  }, 5000);

  mostrarSlide(slideIndex);
