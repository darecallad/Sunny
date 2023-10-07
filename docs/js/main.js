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

const readMoreLinks = document.querySelectorAll(".read-more");
readMoreLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const quoteText = this.previousElementSibling;

    if (quoteText.classList.contains("expanded")) {
      quoteText.classList.remove("expanded");
      this.textContent = "Read More";
    } else {
      quoteText.classList.add("expanded");
      this.textContent = "Read Less";
    }
  });
});

function closeSubnav(subnav) {
  subnav.style.visibility = "hidden";
  subnav.style.opacity = "0";
  subnav.style.maxHeight = "0";
  subnav.style.transform = "translateY(-100%)";
  subnav
    .closest(".nav__click")
    .querySelector(".list__flex")
    .classList.remove("active");
}

function navBehavior() {
  const navClickSpans = document.querySelectorAll(".nav__click .list__flex");
  let closeTimeout;
  // Close all subnavs
  function closeAllSubnavs() {
    const allSubnavs = document.querySelectorAll(".subnav__content");
    allSubnavs.forEach((subnav) => {
      closeSubnav(subnav);
    });
  }

  navClickSpans.forEach((div) =>
    div.addEventListener("click", function (e) {
      const parentItem = div.closest(".nav__click");
      const subnav = parentItem.querySelector(".subnav__content");
      const isActive = div.classList.contains("active");

      if (!isActive) {
        closeAllSubnavs();
      }

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
        closeSubnav(subnav);
      }

      e.stopPropagation();
    })
  );

  if (window.innerWidth > 768) {
    const subnavContents = document.querySelectorAll(".subnav__content");
    subnavContents.forEach((subnav) => {
      subnav.closest(".nav__click").addEventListener("mouseleave", function () {
        closeTimeout = setTimeout(() => {
          closeSubnav(subnav);
        }, 300);
      });
      subnav.closest(".nav__click").addEventListener("mouseenter", function () {
        clearTimeout(closeTimeout);
      });
    });
  }
}

document.addEventListener("click", function (e) {
  const subnavs = document.querySelectorAll(".subnav__content");
  subnavs.forEach((subnav) => {
    if (!e.target.closest(".nav__click")) {
      closeSubnav(subnav);
    }
  });
});

navBehavior();
