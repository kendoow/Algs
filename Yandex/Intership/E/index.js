
function solution({ users, rooms }) {
    const roomStatus = new Array(24).fill(0); // Массив для отслеживания состояния каждой комнаты

    const playingIntervals = []; // Массив для хранения промежутков времени, когда Василий играл с кем-то

    for (const user of users) {
        const startTime = user[0];
        const endTime = user[1];

        // Проверяем доступные комнаты и находим первую пустую или с одним гостем комнату
        let roomIndex = -1;
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i] >= 2 && roomStatus[startTime] < 2) {
                roomIndex = i;
                break;
            } else if (rooms[i] === 1 && roomStatus[startTime] === 1) {
                roomIndex = i;
                break;
            }
        }

        // Если нашли подходящую комнату, помещаем пользователя в нее
        if (roomIndex !== -1) {
            for (let time = startTime; time < endTime; time++) {
                roomStatus[time]++;
            }
            // Если комната рассчитана на 2 или более людей, Василий идет играть
            if (rooms[roomIndex] >= 2) {
                playingIntervals.push([startTime, endTime]);
            }
        } else {
            // Если нет подходящей комнаты, и Василий не играет с гостями, проверяем, есть ли одиночные гости в комнатах с компанией
            let playWithGuest = false;
            for (let i = 0; i < rooms.length; i++) {
                if (rooms[i] >= 2 && roomStatus[startTime] === 1) {
                    playWithGuest = true;
                    break;
                }
            }
            if (playWithGuest) {
                playingIntervals.push([startTime, endTime]);
            }
        }
    }

    return playingIntervals;
}

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