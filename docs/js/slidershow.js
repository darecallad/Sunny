document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const pictures = document.querySelectorAll(".picture-container picture");

  setInterval(function () {
    pictures[currentIndex].style.display = "none";

    currentIndex++;
    if (currentIndex >= pictures.length) {
      currentIndex = 0;
    }

    pictures[currentIndex].style.display = "block";
  }, 3000);
});
