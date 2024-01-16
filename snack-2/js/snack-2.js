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

/*
console.log(students);

// Creo una lista di tutti gli studenti con voto > 70
const over70Students = students.filter(({ grades }) => grades > 70);
console.log(over70Students);

// Creo una lista di tutti gli studenti con voto > 70 e id > 120
const over120Over70Students = [];

// Ciclo su tutti gli elementi dell'array students
for (let i = 0; i < students.length; i++) {

    const student = students[i];

    // ! Validazione
    if (student.id > 120 && student.grades > 70) over120Over70Students.push(student);
}

// Stampo in console il nuovo array
console.log(over120Over70Students);
*/




let items = '';

for (let j = 0; j < students.length; j++) {

    const student = students[j];

    // Trasformo i nomi della targa tutto in maiuscolo
    const upperName = student.name.toUpperCase();

    items += `
    <li>
        <div>${student.id} | ${upperName} | ${student.grades}</div>
    </li>
    `

}

// Stampo in pagina la lista di informazioni
list.innerHTML = items;

console.log(items);