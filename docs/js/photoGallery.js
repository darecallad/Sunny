var currentPhotoIndex = 0;
var totalPhotos;
var photoThumbnails = document.querySelectorAll(".photo-thumbnail");

function setTotalPhotosBasedOnViewport() {
  var width = window.innerWidth;

  if (width <= 480) {
    totalPhotos = 1;
  } else if (width <= 768) {
    totalPhotos = 2;
  } else {
    totalPhotos = 4;
  }

  showPhotos();
}

function showPhotos() {
  for (var i = 0; i < photoThumbnails.length; i++) {
    if (i >= currentPhotoIndex && i < currentPhotoIndex + totalPhotos) {
      photoThumbnails[i].style.display = "block";
    } else {
      photoThumbnails[i].style.display = "none";
    }
  }
}

function openModalWithPhoto(src) {
  document.getElementById("modal-content").src = src;
  var modal = document.getElementById("photo-modal");
  modal.style.display = "flex";
}

function closePhotoModal() {
  document.getElementById("photo-modal").style.display = "none";
}
document.querySelector(".close-button").onclick = closePhotoModal;

function showPreviousPhotos() {
  if (currentPhotoIndex > 0) {
    currentPhotoIndex--;
    showPhotos();
  }
}

function showNextPhotos() {
  if (currentPhotoIndex < photoThumbnails.length - totalPhotos) {
    currentPhotoIndex++;
    showPhotos();
  }
}

function showPreviousModalPhoto() {
  if (currentPhotoIndex > 0) {
    currentPhotoIndex--;
    let newSrc = photoThumbnails[currentPhotoIndex].querySelector("img").src;
    document.getElementById("modal-content").src = newSrc;
  }
}

function showNextModalPhoto() {
  if (currentPhotoIndex < photoThumbnails.length - 1) {
    currentPhotoIndex++;
    let newSrc = photoThumbnails[currentPhotoIndex].querySelector("img").src;
    document.getElementById("modal-content").src = newSrc;
  }
}

setTotalPhotosBasedOnViewport();
window.addEventListener("resize", setTotalPhotosBasedOnViewport);
showPhotos(); // 初始化页面显示

document
  .querySelector(".left-arrow")
  .addEventListener("click", showPreviousPhotos);
document
  .querySelector(".right-arrow")
  .addEventListener("click", showNextPhotos);
