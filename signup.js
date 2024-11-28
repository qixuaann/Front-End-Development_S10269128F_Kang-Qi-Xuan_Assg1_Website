function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Check if all fields are filled
    if (!username || !email || !password || !confirmPassword) {
        alert("All fields are required!");
        return false; // Prevent form submission
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false; // Prevent form submission
    }

    // If everything is valid, proceed with form submission
    return true;
}
