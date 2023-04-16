const asteroidCollision = function (asteroids) {
	const stack = [];

	for (let i = 0; i < asteroids.length; i++) {
		const asteroid = asteroids[i];
		if (stack.length === 0) {
			stack.push(asteroid);
		} else {
			if (stack[stack.length - 1] > 0) {
				// right
				if (asteroid > 0) {
					stack.push(asteroid);
				} else {
					// right + left
					if (stack[stack.length - 1] + asteroid > 0) {
						continue;
					} else if (stack[stack.length - 1] + asteroid < 0) {
						stack.pop();
						i--;
					} else {
						stack.pop();
					}
				}
			} else {
				stack.push(asteroid);
			}
		}
	}

	return stack;
};

console.log(asteroidCollision([8, -8]));
