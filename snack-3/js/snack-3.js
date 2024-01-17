// Creo un array di oggetti contenenti diversi tipi di bici
const bicyles = [
    {
        name: 'Bottecchia',
        weight: 20
    },
    {
        name: 'Olmo',
        weight: 18
    },
    {
        name: 'Pistidda',
        weight: 17
    },
    {
        name: 'Bianchi',
        weight: 22
    },
    {
        name: 'Casati',
        weight: 19
    }
];


// Creo un nuovo array composto soltanto dai pesi delle bici
const weightArray = bicyles.map(({ weight }) => weight);
console.log(weightArray);

// Calcolo il peso minore
const lessWeight = Math.min(...weightArray);
console.log(lessWeight);

// Cerco la bici con valore corrispondente al peso minimo
const lessWeightbicyle = bicyles.find(({ weight }) => weight === lessWeight);
console.log(lessWeightbicyle);