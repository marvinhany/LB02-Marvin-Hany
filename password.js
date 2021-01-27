//Das eingegebene passwort wird mit dem hier hinterlegtem Passwort überprüft
function checkPassword() {
    var password = document.getElementById("inputPassword");
    var passwordText = password.value;
    if (passwordText == "Admin") {
        return true;
    } 
    else {
        alert("Passwort Inkorrekt!");
        return false;
    }
}