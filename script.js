document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display a response message
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.innerHTML = `Thank you, ${name}! Your message has been sent.`;
    responseMessage.style.display = "block";

    // Clear the form
    this.reset();
  });
