const swapNodes = function (head, k) {
	if (!head) {
		return null;
	}
	let left = head,
		right = head;
	for (let i = 1; i < k; i++) {
		left = left.next;
	}	
	let curr = left;
	while (curr.next) {
		curr = curr.next;
		right = right.next;
	}
	let temp = left.val;
	left.val = right.val;
	right.val = temp;
	return head;
};
