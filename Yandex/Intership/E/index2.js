function solution({ users, rooms }) {
    const result = [];
    const roomAvailability = new Array(24).fill(0); // Массив для отслеживания доступности комнат по времени
  
    for (const [startTime, endTime] of users) {
      let playedTogether = false; // Флаг для отслеживания игры Василия с гостями
  
      for (let time = startTime; time < endTime; time++) {
        if (roomAvailability[time] < rooms.length) {
          // Если есть доступные комнаты
          roomAvailability[time]++;
          playedTogether = true;
        } else {
          // Если все комнаты заняты
          if (!playedTogether) {
            // Если Василий не играл с гостями, начинаем игру в первой комнате
            result.push([time, time + 1]);
            playedTogether = true;
          } else {
            // Если Василий уже играет с гостем, продолжаем игру
            result[result.length - 1][1]++;
          }
        }
      }
    }
  
    return result;
  };







const f1 = {
    "users": [
        [10, 12],
        [13, 17],
        [14, 15]
    ],
    "rooms": [2]
}

const f2 = {
    "users": [
        [10, 12],
        [13, 15],
        [16, 17]
    ],
    "rooms": [1]
}

console.log(solution(f1))
console.log(solution(f2))