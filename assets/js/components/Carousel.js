class Carousel {
  carouselData = [];
  cardsPerSlide = 6;
  totalSlides = 0;
  currentIndex = 0;
  mode="square";
  DOM = {};

  constructor(data, DOM, mode, nbCards = 6) {
    this.carouselData = data;
    this.totalSlides = Math.ceil(this.carouselData.length / this.cardsPerSlide);
    this.DOM = {
      carousel: DOM.carousel,
      prevButton: DOM.prevButton,
      nextButton: DOM.nextButton
    };
    this.mode = mode;
    this.cardsPerSlide = nbCards

    this.init();
  }

  init() {
    const {carousel, prevButton, nextButton} = this.DOM;

    for (let i = 0; i < this.totalSlides; i++) {
      const slide = document.createElement("div");
      slide.className = `min-w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-${this.cardsPerSlide} gap-4`;

      for (let j = 0; j < this.cardsPerSlide; j++) {
        const cardIndex = i * this.cardsPerSlide + j;
        if (cardIndex < this.carouselData.length) {
          const {image, text} = this.carouselData[cardIndex];
          const card = document.createElement("a");
          const ratio = this.mode === 'narrow' ? 'h-80' : 'aspect-square'
          card.href = this.carouselData[cardIndex].url;
          card.className = `bg-white rounded-lg overflow-hidden ${ratio}`;
          card.innerHTML = `
            <img src="${image}" alt="${text}" class="w-full h-full object-cover">
            <div class="p-4 text-center">
              <h3 class="text-lg font-semibold">${text}</h3>
            </div>
          `;
          slide.appendChild(card);
        }
      }
      carousel.appendChild(slide);
    }



    prevButton.addEventListener("click", () => {
      this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.totalSlides - 1;
      this.updateCarousel();
    });

    nextButton.addEventListener("click", () => {
      this.currentIndex = (this.currentIndex < this.totalSlides - 1) ? this.currentIndex + 1 : 0;
      this.updateCarousel();
    });

    this.updateCarousel();
  }


  updateCarousel() {
    const offset = -this.currentIndex * 100; // Calculate offset based on index
    this.DOM.carousel.style.transform = `translateX(${offset}%)`;
  };
}