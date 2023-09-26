document
  .getElementById("prevTestimonial")
  .addEventListener("click", function () {
    navigateTestimonial(-1);
  });

document
  .getElementById("nextTestimonial")
  .addEventListener("click", function () {
    navigateTestimonial(1);
  });

function navigateTestimonial(direction) {
  const testimonials = document.querySelectorAll(".testimonial");
  let activeIndex = 0;
  testimonials.forEach((testimonial, index) => {
    if (testimonial.classList.contains("active")) {
      activeIndex = index;
    }
  });

  const newIndex =
    (activeIndex + direction + testimonials.length) % testimonials.length;
  testimonials[activeIndex].classList.remove("active");
  testimonials[newIndex].classList.add("active");
}

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

document.querySelector(".read-more").addEventListener("click", function () {
  const quoteText = document.querySelector(".quote__text");

  if (quoteText.classList.contains("expanded")) {
    quoteText.classList.remove("expanded");
    this.textContent = "Read More";
  } else {
    quoteText.classList.add("expanded");
    this.textContent = "Read Less";
  }
});

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
