let currentIndex = 0;
const images = ["images/listing-watch.jpeg", "images/silver-watch.jpg", "images/black-watch.jpg"]; // Add more image paths as needed

// Function to change image on thumbnail click
function changeImage(imageSrc) {
    document.getElementById("mainImage").src = imageSrc;
}

// Function to move to next/previous image
function moveSlide(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById("mainImage").src = images[currentIndex];
}

// Function to change image based on color selection
function changeColorImage() {
    const selectedColor = document.getElementById("color-select").value;
    document.getElementById("mainImage").src = selectedColor;
}

document.getElementById("toggle-button").addEventListener("click", function () {
  const content = document.getElementById("desc-content");
  const button = this;

  // Toggle the `open` class
  content.classList.toggle("open");

  // Change button text based on the state
  if (content.classList.contains("open")) {
      button.textContent = "VIEW LESS";
      // Move the button down when the content is expanded
      button.style.marginTop = "750px"; // Adjust this value to control the space below the content
  } else {
      button.textContent = "VIEW MORE";
      // Reset the button position when the content is collapsed
      button.style.marginTop = "60px";
  }
});
