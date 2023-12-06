document.addEventListener("DOMContentLoaded", function () {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxqKwW8cIKwQZ1W5YpD9rdps_TH7KcXydhZSFV3ALDGQyeS7YVXPtjwD8BGWVM-dJn-/exec";
    const form = document.forms["contactForm"];
    const output = document.getElementById("output");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const fname = document.getElementById("fname").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("message").value;
      console.log("fname", fname, email, phone, message);
      if (fname === "" || email === "" || phone === "") {
        output.textContent = "All fields are required!";
        return;
      }
  
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (!nameRegex.test(fname)) {
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
  
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            console.log("res",response)
          alert("Thank you! your form is submitted successfully.");
                    output.classList.remove("text-danger");
                    output.classList.add("text-success");
                    output.textContent = "Form submitted successfully!";
                    form.reset();
                    setTimeout(function () {
                        output.textContent = " ";
                    }, 2000);
        })
        .catch((error) => {
            console.error(error);
            alert("Error in request");
            output.classList.add("text-danger");
                output.textContent = "Internal server error";
        })
    });
  });
  