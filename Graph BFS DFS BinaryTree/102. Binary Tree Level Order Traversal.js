const levelOrder = function (root) {
	if (!root) return [];

	const results = [];
	const queue = [root];

	while (queue.length > 0) {
		const currentLength = queue.length;
		const currentLevel = [];

		for (let i = 0; i < currentLength; i++) {
			const node = queue.shift();
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
			currentLevel.push(node.val);
		}

		results.push(currentLevel);
	}

	return results;
};
