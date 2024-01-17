// Aggiungo l'array degli invitati
const table = 'Tavolo Vip';

const guests = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin'
];

console.log(guests);

// Creo un nuovo array degli invitati
const guestsList = guests.map((name, i) => ({ table, name, place: i+1 }));

// Stampo in console il nuovo array 
console.log(guestsList);  
  

