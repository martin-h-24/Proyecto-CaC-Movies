const form = document.getElementById("loginForm");
let isLogged = false;

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Validación personalizada con JavaScript
    const email = document.getElementById("email").value;
    const contrasena = document.getElementById("contrasena").value;

    if (!email.includes("@")) {
        alert("Ingresa una dirección de correo electrónico válida.");
        isLogged = false;
    }

    if (contrasena.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        isLogged = false;
    }

    // Si todo está bien, puedes enviar el formulario al servidor aquí
    alert("Login exitoso!");

    isLogged = true;

    const novedades = document.getElementById("novedades");
    const sagas = document.getElementById("sagas");
    const novedadesHref = "index2.html";
    const sagasHref = "index3.html";

    if(isLogged) {
      novedades.href = novedadesHref;
      sagas.href = sagasHref;
    } else {
      novedades.href = "#";
      sagas.href = "#";
    }
});

