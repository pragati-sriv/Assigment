const images = [
  "https://picsum.photos/id/1015/900/600",
  "https://picsum.photos/id/1025/900/600",
  "https://picsum.photos/id/1035/900/600",
  "https://picsum.photos/id/1045/900/600",
  "https://picsum.photos/id/1055/900/600",
];

const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("dotsContainer");

let currentIndex = 0;

function initSlider() {
  images.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showImage(index));
    dotsContainer.appendChild(dot);
  });
  showImage(currentIndex);
}

function showImage(index) {
  sliderImage.src = images[index];
  currentIndex = index;
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

let autoSlide = setInterval(nextImage, 3000);

nextBtn.addEventListener("click", () => {
  nextImage();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevImage();
  resetAutoSlide();
});

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextImage, 5000);
}

initSlider();
