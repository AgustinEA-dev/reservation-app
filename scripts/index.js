const rows = 5;
const cols = 5;
const seatingTable = document.getElementById('seatingTable').querySelector('tbody');

function generateTable() {
    seatingTable.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        let row = seatingTable.insertRow();
        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell();
            cell.innerText = 'L';
            cell.dataset.row = i + 1;
            cell.dataset.column = j + 1;

            let seatKey = `seat-${i + 1}-${j + 1}`;
            if (localStorage.getItem(seatKey) === 'reserved') {
                cell.classList.add('reserved');
                cell.innerText = 'R';
            }

            cell.addEventListener('click', function () {
                handleSeatReservation(cell);
            });
        }
    }
}

const modalOverlay = document.createElement('div');
modalOverlay.classList.add('modal-overlay');
document.body.appendChild(modalOverlay);

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
        showModalNonExistentSeat();
    }
});

function handleSeatReservation(cell) {
    let row = cell.dataset.row;
    let column = cell.dataset.column;

    if (cell.classList.contains('reserved')) {
        return; 
    }

    let firstName = prompt("Ingresa tu nombre:");
    let lastName = prompt("Ingresa tu apellido:");

    if (firstName && lastName) {
        showConfirmationModal(row, column, firstName, lastName, cell);
    }
}

function showConfirmationModal(row, column, firstName, lastName, cell) {
    showOverlay();
    let modal = createModal(`Confirmación`, `¿Confirmar reserva para el asiento (${row}, ${column})?`,
        `Reservado a nombre de: ${firstName} ${lastName}`, [
        {
            text: 'Confirmar', action: () => {
                cell.classList.add('reserved');
                cell.innerText = 'R';

                localStorage.setItem(`seat-${row}-${column}`, 'reserved');

                closeModal(modal);
                showModal(`Reserva Confirmada`, `Asiento reservado: (${row}, ${column})`, `A nombre de: ${firstName} ${lastName}`);

                document.getElementById('reservationForm').reset();
            }
        },
        { text: 'Cancelar', action: () => closeModal(modal) }
    ]);
    document.body.appendChild(modal);
}

function showModal(title, message, extra = '') {
    showOverlay();
    let modal = createModal(title, message, extra, [
        { text: 'Cerrar', action: () => closeModal(modal) }
    ]);
    document.body.appendChild(modal);
}

function showModalSeatNotAvailable() {
    showModal('Este asiento no está disponible', 'Por favor, elige otro asiento.');
}

function showModalNonExistentSeat() {
    showModal('Este asiento no existe', 'Verifica los números de fila y columna.');
}

function createModal(title, message, extra, buttons) {
    let modal = document.createElement('div');
    modal.classList.add("confirmation-modal");
    modal.innerHTML = `<h2>${title}</h2>
                        <p>${message}</p>
                        <p>${extra}</p>`;

    buttons.forEach(button => {
        let btn = document.createElement('button');
        btn.textContent = button.text;
        btn.addEventListener('click', button.action);
        modal.appendChild(btn);
    });

    return modal;
}

function showOverlay() {
    modalOverlay.classList.add('active');
}

function closeModal(modal) {
    document.body.removeChild(modal);
    modalOverlay.classList.remove('active');
}

generateTable();
