// Creo un array di squadre
const teams = [
    {
        name: 'Salernitana',
        points: 0,
        fouls: 0
    }, 
    {
        name: 'Napoli',
        points: 0,
        fouls: 0
    }, 
    {
        name: 'Milan',
        points: 0,
        fouls: 0
    }, 
    {
        name: 'Inter',
        points: 0,
        fouls: 0
    }, 
    {
        name: 'Juventus',
        points: 0,
        fouls: 0
    } 
];

// Creo un nuovo array con stesso nome ma con valori randomici in punti fatti e falli subiti
const newTeams = teams.map(team => {

    const randomPoints = Math.floor(Math.random() * 100) + 1;

    const randomFouls = Math.floor(Math.random() * 50) + 1;

    return {name: team.name, points: randomPoints, fouls: randomFouls} 
});

console.log(newTeams);


// Creo un nuovo array composto dai nomi ed i falli subiti
const nameFoulsStats = newTeams.map(newTeam => {
    return {name: newTeam.name, fouls: newTeam.fouls}
});

console.log(nameFoulsStats);
