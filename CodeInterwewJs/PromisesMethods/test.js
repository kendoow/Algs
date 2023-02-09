const testCases = [
    [], //true
    [[1,1]], //true
    [[-1,-1],[-1,-1]], //true, потому что одна и та же точка
    [[1,1],[1,1]], //true, потому что одна и та же точка
    [[0,0],[1,0]], //true
    [[1,1],[-1,1]], //true
    [[1,1],[-1,-1]], //false
    [[1,1],[-1,-1],[-1,1]], //false
    [[1,1],[-1,-1],[-1,1], [1,-1]], //true
    [[1,1],[-1,-1],[-1,1], [2,-1]], //false
    [[-1, -1], [1, -1], [2, 1], [-2, 1], [-3, -2], [3, -2]], //true
    [[-1, -1], [1, -1], [2, 1], [-2, 1], [-3, -2]], //false
    [[-3, 2], [7, 2], [-1, 4], [5, 4], [1, 1], [3, 1], [2, 2], [2, -3]], //true
]

function isReflected(points) {
		//если точек нет или она одна, для неё 100% можно построить такую прямую
    if (points.length <= 1) {
        return true;
    }

    const pointsSet = new Set();
		
		//это нужно, чтобы потом найти X этой вертикальной прямой
    let minX = +Infinity;
    let maxX = -Infinity;
		
		//проходимся по всем точкам, отправляем их в Set и попутно ищем X для прямой
    points.forEach((point) => {
        let x = point[0];
        let y = point[1];

        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);

        const pointSet = [x, y].toString();

        pointsSet.add(pointSet);
    });
		
		//Для прямой y = (minX + maxX) / 2, но нам не нужно деление
    const sumX = (minX + maxX);
		
		//for вместо forEach, потому что в forEach return работает как continue :^)
    for (let i = 0; i < points.length; i ++) {
        let x = points[i][0];
        let y = points[i][1];
				
				//это будет симметричная точка относительно прямой для текущей точки
        const pointToCheck = [sumX - x, y].toString();  
					
				//если симметричной точки нет, то и прямой такой нет
        if (!pointsSet.has(pointToCheck)) {
            return false;
        }
    }

    return true;
}

testCases.forEach((testCase) => console.log(isReflected(testCase)));