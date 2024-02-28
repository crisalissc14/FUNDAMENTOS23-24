document.getElementaryById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
})

//validación
if(username==='usuario' && password==='contraseña'){
    alert("Login successful!");
    window.location.href="menu.html";
}else{
    alert("Usuario o Contraseña incorrectos");
}

