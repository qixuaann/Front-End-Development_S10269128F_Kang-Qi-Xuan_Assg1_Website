document.querySelector("form").addEventListener("submit", function (e) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please fill in all fields!");
        e.preventDefault(); // Stop form submission
    }
});
