document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phonenumber").value;
  const message = document.getElementById("message").value;

  const fullName = `${firstName} ${lastName}`;

  const contactMethod = document
    .querySelector(".dropdown-toggle")
    .textContent.trim();
  const startDate = document
    .querySelectorAll(".dropdown-toggle")[1]
    .textContent.trim();

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
    }),
  }).then((response) => {
    if (response.ok) {
      alert("Email sent!");
    } else {
      alert("Failed to send email.");
    }
  });
});
