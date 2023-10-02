// 選擇所有的 .card_container 元素
var cards = document.querySelectorAll(".card_container");

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    if (window.innerWidth >= 768) {
      return;
    }
    var bodyContent = card.querySelector(".card_staff_body");
    bodyContent.classList.toggle("visible");
  });
});
