document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  fetch("https://sunnyemail.herokuapp.com/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
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
