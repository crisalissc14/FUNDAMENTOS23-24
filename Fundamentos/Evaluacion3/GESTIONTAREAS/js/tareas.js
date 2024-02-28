var tareas = [];// Add an event listener to the "Agregar" button to call the agregarTarea function
document.getElementById("btnAgregar").addEventListener("click", agregarTarea);

function agregarTarea() {
    var txtTarea = document.getElementById("txtTarea").value;
    var txtDescripcion = document.getElementById("txtDescripcion").value;
    var txtEstado = document.getElementById("txtEstado").value;
    var fila = '<tr><td>' + (tareas.length + 1) + '</td><td>' + txtTarea + '</td><td>' + txtDescripcion + '</td><td>' + txtEstado + '</td><td><button class="btn-actualizar" onclick="actualizarTarea(' + (tareas.length) + ')">Actualizar</button><button class="btn-eliminar" onclick="eliminarTarea(' + (tareas.length) + ')">Eliminar</button></td></tr>';
    document.getElementById("tabla").innerHTML += fila;
    tareas.push({
        id: tareas.length + 1,
        tarea: txtTarea,
        descripcion: txtDescripcion,
        estado: txtEstado
    });
}

function actualizarTarea(id) {
    var tarea = tareas[id];
    if (confirm("¿Desea actualizar la tarea?")) {
        var txtTarea = prompt("Ingrese el nombre de la tarea", tarea.tarea);
        var txtDescripcion = prompt("Ingrese la descripción de la tarea", tarea.descripcion);
        var txtEstado = prompt("Ingrese el estado de la tarea", tarea.estado);
        tareas[id].tarea = txtTarea;
        tareas[id].descripcion = txtDescripcion;
        tareas[id].estado = txtEstado;
        document.getElementById("tabla").innerHTML = "";
        for (var i = 0; i < tareas.length; i++) {
            var fila = '<tr><td>' + (i + 1) + '</td><td>' + tareas[i].tarea + '</td><td>' + tareas[i].descripcion + '</td><td>' + tareas[i].estado + '</td><td><button class="btn-actualizar" onclick="actualizarTarea(' + (i) + ')">Actualizar</button><button class="btn-eliminar" onclick="eliminarTarea(' + (i) + ')">Eliminar</button></td></tr>';
            document.getElementById("tabla").innerHTML += fila;
        }
    }
}

function eliminarTarea(id) {
    if (confirm("¿Desea eliminar la tarea?")) {
        tareas.splice(id, 1);
        document.getElementById("tabla").innerHTML = "";
        for (var i = 0; i < tareas.length; i++) {
            var fila = '<tr><td>' + (i + 1) + '</td><td>' + tareas[i].tarea + '</td><td>' + tareas[i].descripcion + '</td><td>' + tareas[i].estado + '</td><td><button class="btn-actualizar" onclick="actualizarTarea(' + (i) + ')">Actualizar</button><button class="btn-eliminar" onclick="eliminarTarea(' + (i) + ')">Eliminar</button></td></tr>';
            document.getElementById("tabla").innerHTML += fila;
        }
    }
}

function buscarTarea(){
    var buscar = document.getElementById("txtBuscar").value;
    var filtro = document.getElementsByTagName("tr");
    for (var i = 0; i < filtro.length; i++){
        var td = filtro[i].getElementsByTagName("td")[1];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(buscar.toUpperCase()) > -1) {
                filtro[i].style.display = "";
            } else {
                filtro[i].style.display = "none";
            }
        }
    }
}
