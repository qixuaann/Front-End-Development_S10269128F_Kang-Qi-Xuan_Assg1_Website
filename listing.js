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
