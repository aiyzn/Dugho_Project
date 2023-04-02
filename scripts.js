var uname;
var password;

function proj() {
    var uname = document.getElementById("uname").value;
    var password = document.getElementById("password").value;

    if (uname == "" && password != "" ) {
       document.getElementById("data").innerHTML = "Enter username";
       console.log("Login error");
    }
    else if (uname != "" && password == "") {
        document.getElementById("data").innerHTML = "Enter password";
        console.log("Login error");
    }
    else if (uname == "" && password == "") {
        document.getElementById("data").innerHTML = "Enter username and password";
        console.log("Login error");
    }
}