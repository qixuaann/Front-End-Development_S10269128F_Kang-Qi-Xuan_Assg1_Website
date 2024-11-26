function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        window.location.href = "index.html"; // Redirect to home page
    } else {
        alert("Please fill in both username and password.");
    }
}
