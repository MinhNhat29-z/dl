const login = require("./login");

test("Login with correct username and password", () => {
    expect(login("admin", "123")).toBe(true);
});

test("Login with incorrect password", () => {
    expect(login("admin", "1234")).toBe(false);
});

test("Login with incorrect username", () => {
    expect(login("user", "123")).toBe(false);
});
