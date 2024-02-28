// Definir la clase empleado
class Empleado{
    constructor(nombre, cargo, edad){
        this.nombre = nombre;
        this.cargo = cargo;
        this.edad = edad;
    }
}

// Array para almacenar los datos de los empleados
let empleados = [];

// Función para agregar un empleado
function agregarEmpleado(event){
    event.preventDefault(); // Evitar que se recargue la página
    // Obtener los valores de los campos del formulario
    let nombre = document.getElementById('nombre').value;
    let cargo = document.getElementById('cargo').value;
    let edad = document.getElementById('edad').value;
    // Crear un nuevo objeto Empleado 
    let nuevoEmpleado = new Empleado(nombre, cargo, edad);
    // agregarlo al array
    empleados.push(nuevoEmpleado);
    // Limpiar los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('cargo').value = '';
    document.getElementById('edad').value = '';
    // Llamar a una función para actualizar la tabla de empleados
    actualizarTabla();
}

// Función para actualizar la tabla de empleados
function actualizarTabla(){
    let tablaBody = document.getElementById('tabla-empleados').getElementsByTagName('tbody')[0];
    // Limpiar la tabla
    tablaBody.innerHTML = '';
    // Agregar cada empleado al cuerpo de la tabla
    empleados.forEach((empleado, index) => {
        let fila = `
            <tr>
                <td>${empleado.nombre}</td>
                <td>${empleado.cargo}</td>
                <td>${empleado.edad}</td>
                <td>
                    <button onclick="eliminarEmpleado(${index})">Eliminar</button>
                    <button onclick="modificarEmpleado(${index})">Modificar</button>
                </td>
            </tr>`;
        tablaBody.innerHTML += fila;
    });
}

// Event listener for the "Agregar empleado" button
document.getElementById('agregar-btn').addEventListener('click', agregarEmpleado);

// Event listener for the "Buscar" button
document.getElementById('buscar-btn').addEventListener('click', buscarEmpleado);

// Actualizar la tabla y cargar la página
window.onload = function(){
    actualizarTabla();
};

// Modificar empleado 
function modificarEmpleado(index){
    let nombre = prompt('Ingrese el nuevo nombre');
    let cargo = prompt('Ingrese el nuevo cargo');
    let edad = prompt('Ingrese el nuevo edad');
    // Aquí puedes hacer lo que desees con los nuevos datos del empleado
    if(nombre&&cargo&& !isNaN(edad)){ // funcion que retorna el valor reservado
        empleados[index].nombre=nombre;
        empleados[index].cargo=cargo;
        empleados[index].edad=edad;
    }
    //actualiza tabla
    actualizarTabla();
}

// Función para buscar un empleado por nombre
function buscarEmpleado(){
    let searchTerm = document.getElementById('buscar-input').value.toLowerCase();
    let resultados = empleados.filter(empleado => empleado.nombre.toLowerCase().includes(searchTerm));
    // Mostrar los resultados en la tabla
    let tablaBody = document.getElementById('tabla-empleados').getElementsByTagName('tbody')[0];
    tablaBody.innerHTML = '';
    resultados.forEach(empleado => {
        let fila = `
            <tr>
                <td>${empleado.nombre}</td>
                <td>${empleado.cargo}</td>
                <td>${empleado.edad}</td>
                <td>
                    <button onclick="eliminarEmpleado(${empleados.indexOf(empleado)})">Eliminar</button>
                    <button onclick="modificarEmpleado(${empleados.indexOf(empleado)})">Modificar</button>
                </td>
            </tr>`;
        tablaBody.innerHTML += fila;
    });
}

// Función para actualizar un empleado (puede ser similar a la función de agregar)
function updateEmployee(row) {
    // Implementar lógica para actualizar un empleado
    console.log('Implementar lógica para actualizar un empleado');
}

// Función para eliminar un empleado
function eliminarEmpleado(index) {
    empleados.splice(index, 1);
    actualizarTabla();
}
