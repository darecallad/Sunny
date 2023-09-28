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
function navBehavior() {
  const navClickSpans = document.querySelectorAll(".nav__click .list__flex");
  navClickSpans.forEach((div) =>
    div.addEventListener("click", function (e) {
      const parentItem = div.closest(".nav__click");
      const subnav = parentItem.querySelector(".subnav__content");
      const isActive = div.classList.contains("active");

      if (
        subnav.style.visibility === "hidden" ||
        !subnav.style.visibility ||
        !isActive
      ) {
        subnav.style.visibility = "visible";
        subnav.style.opacity = "1";
        subnav.style.maxHeight = "25rem";
        subnav.style.transform = "translateY(0)";
        div.classList.add("active");
      } else {
        subnav.style.visibility = "hidden";
        subnav.style.opacity = "0";
        subnav.style.maxHeight = "0";
        subnav.style.transform = "translateY(-100%)";
        div.classList.remove("active");
      }

      e.stopPropagation();
    })
  );
}

document.addEventListener("click", function (e) {
  const subnavs = document.querySelectorAll(".subnav__content");
  subnavs.forEach((subnav) => {
    if (!e.target.closest(".nav__click")) {
      subnav.style.visibility = "hidden";
      subnav.style.opacity = "0";
      subnav.style.maxHeight = "0";
      subnav.style.transform = "translateY(-100%)";
    }
  });
});

navBehavior();

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
