const matchPlayersAndTrainers = (players, trainers) => {
    players.sort((a,b) => a - b)
    trainers.sort((a,b) => a - b)
    let i = 0;
    for (let j = 0; j < trainers.length; j++) {
        if (players[i] <= trainers[j]) {
            i++;
        }
    }
    
    return i;
};


console.log(matchPlayersAndTrainers([1,1,1],[10]))