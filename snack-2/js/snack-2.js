// Prendo gli elementi dal DOM
const list = document.getElementById('list');

// Creo l'array degli studenti
const students = [
    {
        id: 213,
        name: 'Marco Della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    }
];


console.log(students);

// Creo una lista di tutti gli studenti con voto > 70
const over70Students = students.filter(({ grades }) => grades > 70);
console.log(over70Students);


// Creo una lista di tutti gli studenti con voto > 70 e id > 120
const over120Students = over70Students.filter(({ id }) => id > 120)
console.log(over120Students);


// Creo un
const plates = students.map(({ name }) => name.toUpperCase());
console.log(plates);

let items = '';

plates.forEach(plate => {
    items += `<li>${plate}</li>`;
})

list.innerHTML = items;