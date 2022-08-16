function validate() {
    var username = document.getElementById("username").Value;
    var password = document.getElementById("password").Value;
    if (username == "admin" && password == "user") {
        alert("login successfully", window.location.href = "https://bbsbec.edu.in/");
        return false;
    } else {
        alert("login failed ");
    }
}