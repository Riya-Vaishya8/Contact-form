document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop form from refreshing

    // input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // error fields
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMsg = document.getElementById("successMsg");

    // reset errors
    nameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";
    successMsg.style.display = "none";

    let valid = true;

    // name validation
    if (name === "") {
        nameError.innerText = "Name cannot be empty!";
        nameError.style.display = "block";
        valid = false;
    }

    // email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.innerText = "Email cannot be empty!";
        emailError.style.display = "block";
        valid = false;
    } else if (!emailPattern.test(email)) {
        emailError.innerText = "Enter a valid email address!";
        emailError.style.display = "block";
        valid = false;
    }

    // message validation
    if (message === "") {
        messageError.innerText = "Message cannot be empty!";
        messageError.style.display = "block";
        valid = false;
    }

    // success message
    if (valid) {
        successMsg.innerText = "Form submitted successfully!";
        successMsg.style.display = "block";

        // clear fields
        document.getElementById("contactForm").reset();
    }
});
