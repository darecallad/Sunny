const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

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
