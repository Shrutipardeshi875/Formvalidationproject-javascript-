document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');

    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let phoneError = document.getElementById('phoneError');
    let passwordError = document.getElementById('passwordError');
    let confirmPasswordError = document.getElementById('confirmPasswordError');

    // Validation for Name
    if (name.value.length < 5) {
        nameError.textContent = 'Enter correct name';
    } else {
        nameError.textContent = '';
    }

    // Validation for Email
    if (!email.value.includes('@')) {
        emailError.textContent = 'Enter correct email';
    } else {
        emailError.textContent = '';
    }

    // Validation for Phone Number
    if (phone.value.length !== 10 || phone.value.startsWith('0') || phone.value.startsWith('1')) {
        phoneError.textContent = 'Enter a valid 10-digit phone number';
    } else {
        phoneError.textContent = '';
    }

    // Validation for Password
    if (password.value === 'password' || password.value === name.value || password.value.length < 8) {
        passwordError.textContent = 'Password is not strong';
    } else {
        passwordError.textContent = '';
    }

    // Validation for Confirm Password
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Passwords do not match';
    } else {
        confirmPasswordError.textContent = '';
    }

    // If all validations pass, submit the form
    if (nameError.textContent === '' && emailError.textContent === '' && phoneError.textContent === '' && passwordError.textContent === '' && confirmPasswordError.textContent === '') {
        alert('Form submitted successfully');
        this.submit();
    }
});