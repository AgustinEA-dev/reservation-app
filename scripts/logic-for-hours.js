// Definir los horarios por obra
const horariosPorObra = {
    "Hamlet": ["19:00", "21:30"],
    "La Casa de Bernarda Alba": ["18:30", "22:00"],
    "El Fantasma de la Ópera": ["20:00", "23:00"],
    "Romeo y Julieta": ["19:30", "21:00"],
    "Esperando a Godot": ["20:30", "22:30"],
    "Cyrano de Bergerac": ["18:00", "21:00"],
    "Un Tranvía Llamado Deseo": ["19:45", "22:15"],
    "La Tempestad": ["20:15", "23:30"],
};

// Obtener el elemento de la obra y el de los horarios
const obraSelect = document.getElementById("obra");
const horaSelect = document.getElementById("hora");

// Función para actualizar los horarios basados en la obra seleccionada
function actualizarHorarios() {
    const obraSeleccionada = obraSelect.value;

    // Limpiar los horarios previos
    horaSelect.innerHTML = '<option value="">Selecciona un horario</option>';

    // Si hay una obra seleccionada, actualizar los horarios
    if (obraSeleccionada && horariosPorObra[obraSeleccionada]) {
        horariosPorObra[obraSeleccionada].forEach(hora => {
            const option = document.createElement("option");
            option.value = hora;
            option.textContent = hora;
            horaSelect.appendChild(option);
        });
    }
}

// Añadir un event listener para detectar cambios en la selección de la obra
obraSelect.addEventListener("change", actualizarHorarios);
