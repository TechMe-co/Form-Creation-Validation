const content = document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('click', function (event) {
        event.preventDefault();
    });

    // retrieve userinput 
    const username = document.getElementById('username');
    username.value.trim();

    const email = document.getElementById('email');
    email.value.trim();

    const password = document.getElementById('password');
    password.value.trim();

    // validation
    let isValid = true;
    let messages = [];

    if(username.length < 3) {
        isValid = false;
        messages.push('Please enter the correct value!');
    };

    if (!email.includes('@', '.')) {
        isValid = false;
        messages.push('Must includes @ and .');
    };

    if(password.length < 8) {
        isValid = false;
        messages.push('Values must be 8 or more!');
    };

    // displaying feedback
    feedbackDiv.style.display = "block";
    if (isValid) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745";
    } else {
        feedbackDiv.innerHTML= messages.join("<br>");
        feedbackDiv.style.color = "#dc3545";
    }

});
