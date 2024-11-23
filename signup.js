document.getElementById("signupForm").addEventListener("submit", function (e) {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Check if all fields are filled
    if (!username || !email || !password || !confirmPassword) {
        alert("All fields are required!");
        e.preventDefault(); // Stop form submission
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        e.preventDefault(); // Stop form submission
        return;
    }

    // Additional checks (e.g., password strength) can be added here
});
