// Update dropdown button text when an option is selected
document.querySelectorAll(".dropdown-menu a").forEach((option) => {
  option.addEventListener("click", function (e) {
    e.preventDefault();
    let dropdownButton = e.target
      .closest(".custom-dropdown")
      .querySelector(".dropdown-toggle");
    dropdownButton.textContent = e.target.textContent;

    // Hide the dropdown menu after a selection
    e.target.closest(".dropdown-menu").style.display = "none";
  });
});

document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phonenumber").value;
  const message = document.getElementById("message").value;

  const fullName = `${firstName} ${lastName}`;

  const children = document.querySelectorAll(".admission_row");
  let childrenDates = [];

  children.forEach((child) => {
    const month = child.querySelector("input[id^='child_month']").value;
    const day = child.querySelector("input[id^='child_day']").value;
    const year = child.querySelector("input[id^='child_year']").value;
    childrenDates.push({ month, day, year });
  });
  const contactMethod = document
    .querySelector(".dropdown-toggle")
    .textContent.trim();
  const startDate = document
    .querySelectorAll(".dropdown-toggle")[1]
    .textContent.trim();

  // Data validation
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phoneNumber ||
    contactMethod === "contact me by..." ||
    startDate === "We'd like to start in..."
  ) {
    alert("Please fill out all the required fields!");
    return;
  }

  fetch("https://sunnyemail-19d950067d7d.herokuapp.com/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: fullName,
      email: email,
      phoneNumber: phoneNumber,
      contactMethod: contactMethod,
      startDate: startDate,
      message: message,
      childrenDates: childrenDates,
    }),
  }).then((response) => {
    if (response.ok) {
      alert("Email sent!");
    } else {
      alert("Failed to send email.");
    }
  });
});
