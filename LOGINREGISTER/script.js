function validateLogin() {
    var userId = document.getElementById("userId").value;
    var password = document.getElementById("password").value;
  
    // Validación de datos
    if (userId === "calasluisa" && password === "12345") {
      window.location.href = "datos.html"; // Redirige a datos.html si los datos son válidos
    } else {
      alert("Invalid user ID or password. Please try again.");
    }
  }
  