// script.js
const formulario = document.getElementById("formularioRolPagos");
const tabla = document.getElementById("rolDePagos");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

    const nombre = formulario.nombre.value;
    const puesto = formulario.puesto.value;
    const salarioBase = parseFloat(formulario.salarioBase.value);
    const horasExtras = parseFloat(formulario.horasExtras.value);
    const bonificaciones = parseFloat(formulario.bonificaciones.value);

    // Validación de puesto y horas extras según las condiciones especificadas
    let horasValidas = false;
    if (puesto === "Obrero" && horasExtras >= 2 && horasExtras <= 4) {
        horasValidas = true;
    } else if (puesto === "Supervisor" && horasExtras >= 3 && horasExtras <= 5) {
        horasValidas = true;
    } else if (puesto === "Administrador" && horasExtras === 0) {
        horasValidas = true;
    }

    // Validación de salario base entre $1 y $1200
    const salarioValido = salarioBase >= 1 && salarioBase <= 1200;

    // Calcular bonificaciones según la cantidad de hijos
    let bonificacion = 0;
    if (bonificaciones === 1) {
        bonificacion = salarioBase * 0.10;
    } else if (bonificaciones > 1) {
        bonificacion = salarioBase * 0.12;
    }

    // Calcular total a pagar
    let totalPagar = 0;
    if (horasValidas && salarioValido) {
        totalPagar = salarioBase + (horasExtras * 20) + bonificacion;
    } else {
        alert("Por favor, revise los datos ingresados.");
        return;
    }

    const nuevaFila = `
        <tr>
            <td>${nombre}</td>
            <td>${puesto}</td>
            <td>${salarioBase}</td>
            <td>${horasExtras}</td>
            <td>${bonificacion.toFixed(2)}</td>
            <td>${totalPagar.toFixed(2)}</td>
        </tr>
    `;

    tabla.innerHTML += nuevaFila;

    formulario.reset(); // Limpiar el formulario después de mostrar los datos en la tabla
});