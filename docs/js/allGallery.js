function initGallery(galleryID) {
  const gallery = document.getElementById(galleryID);
  let currentImageIndex = 0;
  const images = gallery.querySelectorAll(".gallery_photo");
  const arrowLeft = gallery.querySelector(".gallery_arrow_left");
  const arrowRight = gallery.querySelector(".gallery_arrow_right");

  function displayImage(index) {
    images.forEach((img) => (img.style.display = "none"));
    images[index].style.display = "block";
  }

  displayImage(currentImageIndex);

  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    displayImage(currentImageIndex);
  }, 3000);

  arrowLeft.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    displayImage(currentImageIndex);
  });

  arrowRight.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    displayImage(currentImageIndex);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initGallery("gallery1");
  initGallery("gallery2");
});
