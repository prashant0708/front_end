let currentSlide = 0; // Index of the currently visible slide
const slides = document.querySelectorAll(".slide"); // All slides
// const slideInterval = 5000; // Time interval in milliseconds (3 seconds)

// Function to change slide
function changeSlide(direction = 1) {
  slides[currentSlide].classList.remove("active"); // Hide the current slide
  currentSlide = (currentSlide + direction + slides.length) % slides.length; // Calculate the next slide index
  slides[currentSlide].classList.add("active"); // Show the next slide
}

// Automatically change slides every `slideInterval`
setInterval(() => {
  changeSlide(1); // Move to the next slide automatically
}, slideInterval);

// Optional: Add event listeners to buttons for manual control
document
  .querySelector(".prev")
  .addEventListener("click", () => changeSlide(-1));
document.querySelector(".next").addEventListener("click", () => changeSlide(1));

