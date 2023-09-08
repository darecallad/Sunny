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
