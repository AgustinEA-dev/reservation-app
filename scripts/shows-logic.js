export const teatroObras = [
    {
        id: 1,
        nombre: "Hamlet",
        autor: "William Shakespeare",
        precio: 30.00,
        horarios: ["19:00", "21:30"],
        descripcion: "Una de las tragedias más conocidas de Shakespeare, que explora temas de venganza, locura y traición.",
        sala: "Sala Principal",
        imagen: "./assets/hamlet.jpg"
    },
    {
        id: 2,
        nombre: "La Casa de Bernarda Alba",
        autor: "Federico García Lorca",
        precio: 25.00,
        horarios: ["18:30", "22:00"],
        descripcion: "Una obra dramática de Lorca sobre la opresión social y familiar en una casa andaluza, después de la muerte del padre.",
        sala: "Sala 2",
        imagen: "./assets/bernarda-alba.jpg"
    },
    {
        id: 3,
        nombre: "El Fantasma de la Ópera",
        autor: "Gaston Leroux",
        precio: 45.00,
        horarios: ["20:00", "23:00"],
        descripcion: "Una historia de misterio y romance, centrada en un hombre enmascarado que vive bajo la ópera de París.",
        sala: "Auditorio",
        imagen: "./assets/fantasma-opera.jpg"
    },
    {
        id: 4,
        nombre: "Romeo y Julieta",
        autor: "William Shakespeare",
        precio: 35.00,
        horarios: ["19:30", "21:00"],
        descripcion: "Una de las historias de amor más famosas de todos los tiempos, que aborda el conflicto entre dos familias rivales.",
        sala: "Sala Principal",
        imagen: "./assets/romeo-julieta.gif"
    },
    {
        id: 5,
        nombre: "Esperando a Godot",
        autor: "Samuel Beckett",
        precio: 28.00,
        horarios: ["20:30", "22:30"],
        descripcion: "Una obra absurda y filosófica que plantea la espera interminable de dos personajes por un ser llamado Godot.",
        sala: "Sala 3",
        imagen: "./assets/esperando-godot.jpeg"
    },
    {
        id: 6,
        nombre: "Cyrano de Bergerac",
        autor: "Edmond Rostand",
        precio: 40.00,
        horarios: ["18:00", "21:00"],
        descripcion: "Una obra sobre el amor no correspondido y el heroísmo, centrada en Cyrano, un hombre con una gran nariz y un gran corazón.",
        sala: "Auditorio",
        imagen: "./assets/cyrano-bergerac.webp"
    },
    {
        id: 7,
        nombre: "Un Tranvía Llamado Deseo",
        autor: "Tennessee Williams",
        precio: 33.00,
        horarios: ["19:45", "22:15"],
        descripcion: "Una obra dramática que explora temas como la decadencia de la familia y la lucha por la supervivencia emocional.",
        sala: "Sala 2",
        imagen: "./assets/tranvia-deseo.jpg"
    },
    {
        id: 8,
        nombre: "La Tempestad",
        autor: "William Shakespeare",
        precio: 38.00,
        horarios: ["20:15", "23:30"],
        descripcion: "Una obra sobre el poder, la magia y el perdón, en la que el protagonista, Prospero, busca venganza tras ser exiliado.",
        sala: "Sala Principal",
        imagen: "./assets/tempestad.jpg"
    },
];


function renderizarObras() {
    const cartelera = document.getElementById('cartelera');
    teatroObras.forEach(obra => {
        const obraElemento = document.createElement('div');
        obraElemento.classList.add('obra');

        obraElemento.innerHTML = `
            <img src="${obra.imagen}" alt="${obra.nombre}" class="obra-imagen">
            <h2>${obra.nombre}</h2>
            <p><strong>Autor:</strong> ${obra.autor}</p>
            <p><strong>Descripción:</strong> ${obra.descripcion}</p>
            <p class="precio">$${obra.precio.toFixed(2)}</p>
            <div class="horarios">
                ${obra.horarios.map(horario => `<span>${horario}</span>`).join('')}
            </div>
        `;

        cartelera.appendChild(obraElemento);
    });
}

renderizarObras();