// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

const middleNode = (head) => {
    let first = head;
    let second = head;


    while(first && first.next){
        first = first.next.next;
        second = second.next;
    }

    return second
};
middleNode([1,2,3,4,5])