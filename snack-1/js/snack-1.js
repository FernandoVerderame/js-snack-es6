// Aggiungo l'array degli invitati
const tableName = 'Tavolo Vip';

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
const guestsList = [];

// Ciclo su tutti gli elementi dell'array guests
for (let i = 0; i < guests.length; i++) {

    // Creo gli oggetti del nuovo array
    const guest = {
        table: tableName,
        name: guests[i],
        place: (i+1)
    }

    // Pusho gli oggetti
    guestsList.push(guest);

}

// Stampo in console il nuovo array 
console.log(guestsList);