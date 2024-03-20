const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

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
        subnav.style.maxHeight = "35rem";
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

document.querySelector(".read-more-btn").addEventListener("click", function () {
  var moreText = document.querySelector(".more-text");
  var btn = document.querySelector(".read-more-btn");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
});
