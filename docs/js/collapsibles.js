const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

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
