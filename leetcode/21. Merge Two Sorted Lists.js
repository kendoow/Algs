const mergeTwoLists = function(l1, l2) {
    const sentinel = {
        val: -1,
        next: null
    };

    let head = sentinel;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            head.next = l2;
            l2 = l2.next;
        } else {
            head.next = l1;
            l1 = l1.next;
        }
        
        head = head.next;
    }

    head.next = l1 || l2;

    return sentinel.next;
} 