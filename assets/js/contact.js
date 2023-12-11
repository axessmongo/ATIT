contact.js



document.addEventListener("DOMContentLoaded", function () {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzFSSWqyZDoefkXarZgjDd26X2J4tPzotfkEpHsq_Oy7ES2neY8OXxTykxAroOKANWu/exec";
  const scriptURL2 =
    "https://script.google.com/macros/s/AKfycbwkNme5wUsougPXfpqmhPAFw3sRE0ZN4pTHLXHCxtycaRWzk7H7m8fKuna19nwpV6cl/exec";

  const form = document.forms["contactForm"];
  const output = document.getElementById("output");

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("message").value;
      console.log("name", name, email, phone, message);
      if (name === "" || email === "" || phone === "") {
          output.textContent = "All fields are required!";
          return;
      }

      const nameRegex = /^[a-zA-Z\s]+$/;
      if (!nameRegex.test(name)) {
          output.classList.add("text-danger");
          output.textContent = "Invalid name. Please use only letters.";
          return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          output.classList.add("text-danger");
          output.textContent = "Invalid email address.";
          return;
      }
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone)) {
          output.classList.add("text-danger");
          output.textContent = "Phone.No should be in 10 digits.";
          return;
      }

      Promise.all([
          fetch(scriptURL, { method: "POST", body: new FormData(form) }),
          fetch(scriptURL2, { method: "POST", body: new FormData(form) })
      ])
      .then((responses) => Promise.all(responses.map((response) => response.json())))
      .then((responses) => {
        const allSuccessful = responses.every(response => response.result === "success");

        if (allSuccessful) {
                          alert("Thank you! Your form is submitted successfully.");
                          output.classList.remove("text-danger");
                          output.classList.add("text-success");
                          output.textContent = "Form submitted successfully!";
                          form.reset();
                          setTimeout(function () {
                              output.textContent = " ";
                          }, 2000);
                      } else  {
                        alert("Error in request");
                        output.classList.add("text-danger");
                        output.textContent = "Internal server error";
                      }
      })
      .catch((error) => {
          alert("Error in request help");
          output.classList.add("text-danger");
          output.textContent = "Internal server error";
      });
  });
});