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
function mobileNavBehavior() {
  const navClickSpans = document.querySelectorAll(".nav__click > span");
  navClickSpans.forEach((span) =>
    span.addEventListener("click", function (e) {
      const parentItem = span.parentElement;
      const subnav = parentItem.querySelector(".subnav__content");

      if (subnav.style.visibility === "hidden" || !subnav.style.visibility) {
        subnav.style.visibility = "visible";
        subnav.style.opacity = "1";
        subnav.style.maxHeight = "23rem";
        subnav.style.transform = "translateY(0)";
      } else {
        subnav.style.visibility = "hidden";
        subnav.style.opacity = "0";
        subnav.style.maxHeight = "0";
        subnav.style.transform = "translateY(-100%)";
      }

      e.stopPropagation();
    })
  );
}

function desktopNavBehavior() {
  const navClickSpans = document.querySelectorAll(".nav__click > span");
  navClickSpans.forEach((span) =>
    span.addEventListener("click", function (e) {
      const parentItem = span.parentElement;
      const subnav = parentItem.querySelector(".subnav__content");

      if (subnav.style.visibility === "hidden" || !subnav.style.visibility) {
        subnav.style.visibility = "visible";
        subnav.style.opacity = "1";
        subnav.style.maxHeight = "auto";
        subnav.style.transform = "translateY(0)";
      } else {
        subnav.style.visibility = "hidden";
        subnav.style.opacity = "0";
        subnav.style.maxHeight = "0";
        subnav.style.transform = "translateY(-100%)";
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

function adjustLayout() {
  if (window.innerWidth > 768) {
    desktopNavBehavior();
  } else {
    mobileNavBehavior();
  }
}

// 當文檔加載時執行
adjustLayout();

// 當視窗大小改變時執行
window.addEventListener("resize", adjustLayout);
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
