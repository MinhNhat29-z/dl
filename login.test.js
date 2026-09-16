function login(username, password) {
    return username === "admin" && password === "123";
}

if (typeof document !== "undefined") {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const result = document.getElementById("result");

        if (login(username, password)) {
            result.textContent = "Login successful";
        } else {
            result.textContent = "Login failed";
        }
    });
}

if (typeof module !== "undefined") {
    module.exports = login;
}
