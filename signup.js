

document.addEventListener('DOMContentLoaded', ()=> {

function checkInputs() {
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirm_password = document.getElementById('confirm_password');
    var messageBox = document.getElementById("messageBox");
    var message = document.getElementById("message");

    message.innerHTML = ""; // Clear the previous message

    // Username validation
    var usernamePattern = /^[A-Za-z][A-Za-z0-9-_]{2,19}$/;
    if (!usernamePattern.test(username.value)) {
        message.innerHTML += "Username is invalid.<br><br>";
    }

    // Email validation
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|io)$/;
    if (!emailPattern.test(email.value)) {
        message.innerHTML += "Email is invalid.<br><br>";
    }

    // Password validation
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\[\]{}|;:'\",.<>?/`~])[A-Za-z\d!@#$%^&*()\-_=+\[\]{}|;:'\",.<>?/`~]{8,}$/;
    if (!passwordPattern.test(password.value)) {
        message.innerHTML += "Password is required and must meet the complexity requirements.<br><br>";
    }

    // Confirm password validation
    if (password.value !== confirm_password.value) {
        message.innerHTML += "Passwords do not match.<br><br>";
    }

    if (message.innerHTML) {
        messageBox.style.display = "block"; // Show the message box
        messageBox.style.color = "red";
    } else {
        message.innerHTML = "Signup successful!";
        messageBox.style.display = "block"; // Show the message box
        messageBox.style.color = "green";
    }
}

document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    checkInputs();
});

})