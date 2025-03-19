const rows = 5;
const cols = 5;
const seatingTable = document.getElementById('seatingTable').querySelector('tbody');

const tooltip = document.createElement('div');
tooltip.style.position = 'absolute';
tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
tooltip.style.color = 'white';
tooltip.style.padding = '5px 10px';
tooltip.style.borderRadius = '5px';
tooltip.style.fontSize = '14px';
tooltip.style.pointerEvents = 'none';
tooltip.style.display = 'none';
document.body.appendChild(tooltip);

function generateTable() {
    seatingTable.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        let row = seatingTable.insertRow();
        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell();
            cell.innerText = 'L';
            cell.dataset.row = i + 1;
            cell.dataset.column = j + 1;

            // Evento de hover para mostrar el tooltip
            cell.addEventListener('mouseover', function (event) {
                tooltip.innerText = `Fila: ${cell.dataset.row}, Columna: ${cell.dataset.column}`;
                tooltip.style.display = 'block';
            });

            // Evento para seguir el mouse
            cell.addEventListener('mousemove', function (event) {
                tooltip.style.top = `${event.clientY + 10}px`;
                tooltip.style.left = `${event.clientX + 10}px`;
            });

            // Evento para ocultar el tooltip
            cell.addEventListener('mouseleave', function () {
                tooltip.style.display = 'none';
            });
        }
    }
}

document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let row = document.getElementById('row').value;
    let column = document.getElementById('column').value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    let cell = document.querySelector(`[data-row='${row}'][data-column='${column}']`);
    if (cell) {
        if (!cell.classList.contains('reserved')) {
            showConfirmationModal(row, column, firstName, lastName, cell);
        } else {
            showModalSeatNotAvailable();
        }
    } else {
        alert('Ubicación no válida');
    }
});

function showConfirmationModal(row, column, firstName, lastName, cell) {
    let modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#112240';
    modal.style.padding = '20px';
    modal.style.borderRadius = '10px';
    modal.style.color = 'white';
    modal.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
    modal.innerHTML = `<h2>Confirmación</h2>
                        <p class="confirmation-p">¿Confirmar reserva para el asiento (${row}, ${column})?</p>
                        <p>Reservado a nombre de: ${firstName} ${lastName}</p>
                        <button id='confirmReservation'>Confirmar</button>
                        <button id='cancelReservation'>Cancelar</button>`;
    document.body.appendChild(modal);

    document.getElementById('confirmReservation').addEventListener('click', function () {
        cell.classList.add('reserved');
        cell.innerText = 'R';
        document.body.removeChild(modal);
        showModal(row, column, firstName, lastName);
    });

    document.getElementById('cancelReservation').addEventListener('click', function () {
        document.body.removeChild(modal);
    });
}

function showModal(row, column, firstName, lastName) {
    let modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#112240';
    modal.style.padding = '20px';
    modal.style.borderRadius = '10px';
    modal.style.color = 'white';
    modal.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
    modal.innerHTML = `<h2>Reserva Confirmada</h2>
                        <p class="confirmation-p">Asiento reservado: (${row}, ${column})</p>
                        <p>A nombre de: ${firstName} ${lastName}</p>
                        <button id='closeModal'>Cerrar</button>`;

    document.body.appendChild(modal);

    document.getElementById('closeModal').addEventListener('click', function () {
        document.body.removeChild(modal);
    });
}

function showModalSeatNotAvailable() {
    let modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#112240';
    modal.style.padding = '20px';
    modal.style.borderRadius = '10px';
    modal.style.color = 'white';
    modal.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
    modal.innerHTML = `<h2>Este asiento no está disponible</h2>
                        <button id='closeModal'>Cerrar</button>`;
    document.body.appendChild(modal);

    document.getElementById('closeModal').addEventListener('click', function () {
        document.body.removeChild(modal);
    });
}

generateTable();
