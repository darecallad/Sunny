// Handle dropdown toggle
document.querySelectorAll(".dropdown-toggle").forEach(function (toggleButton) {
  toggleButton.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent the event from bubbling up

    // Get the associated dropdown menu for the clicked button
    var menu = toggleButton.nextElementSibling;

    // Toggle the display of that specific menu
    menu.style.display =
      menu.style.display === "none" || menu.style.display === ""
        ? "block"
        : "none";

    // Close other dropdown menus
    document.querySelectorAll(".dropdown-menu").forEach(function (otherMenu) {
      if (otherMenu !== menu) {
        otherMenu.style.display = "none";
      }
    });
  });
});

// Handle option selection
document.querySelectorAll(".dropdown-menu a").forEach(function (option) {
  option.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    e.stopPropagation(); // Prevent the event from bubbling up

    var dropdown = option.closest(".custom-dropdown");
    var toggleButton = dropdown.querySelector(".dropdown-toggle");
    toggleButton.textContent = option.textContent;

    option.closest(".dropdown-menu").style.display = "none";
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  if (
    !event.target.closest(".custom-dropdown") &&
    !event.target.closest(".dropdown-menu")
  ) {
    document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
      menu.style.display = "none";
    });
  }
});

document
  .getElementById("duplicateButton")
  .addEventListener("click", function () {
    const container = document.getElementById("container");
    const clonableRow = document.querySelector(".admission_row");
    const clonedRow = clonableRow.cloneNode(true);

    let newIdSuffix = Date.now();
    const inputElements = clonedRow.querySelectorAll(".admission_basicinput");
    inputElements.forEach((input) => {
      input.id += "_" + newIdSuffix;
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "-";
    removeBtn.classList.add("admission_removebtn");
    removeBtn.addEventListener("click", function () {
      clonedRow.remove();
    });

    const clonableDiv = clonedRow.querySelector(".clonableDiv");
    clonableDiv.insertBefore(removeBtn, clonableDiv.firstChild);

    container.appendChild(clonedRow);
  });
