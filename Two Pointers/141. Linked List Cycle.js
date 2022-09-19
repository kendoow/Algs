const hasCycle = (head) => {
  if (!head || !head.next) {
    return false;
  }

  let first = head;
  let second = head.next;

  while (second && second.next) {
    if (second === first) {
      return true;
    }

    first = first ? first.next : null;
    second = second.next.next;
  }

  return false;
};
