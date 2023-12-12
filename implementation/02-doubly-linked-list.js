// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);
        this.length++;

        if(this.head === null)
        {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.prev= newNode;
        //Node.next = this.head;

        this.head = newNode;

        /*
        if (this.length >= 0) {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        */


    }

    addToTail(val) {

        this.length++;

        let newNode = new DoublyLinkedNode(val);

        if(this.head===null)
        {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;

        this.tail = newNode;
        // Add node of val to tail of linked list

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {


        if (this.head === null) return undefined;

        this.length--;

        const ret = this.head;

        this.head = this.head.next;

        if (this.head !== null) {
            this.head.prev = null;
        } else {
            this.tail = null;

            ///return null;
        }

  return ret;

        // Remove node at head

        // Write your hypothesis on the time complexity of this method here
        // thsi is O(1)
    }

    removeFromTail() {


        if(this.tail === null) return undefined;

        this.length--;

        const ret= this.tail;

        this.tail = this.tail.prev;

        if(this.tail!=null) this.tail.next = null;

        return ret; // this.tail;
        // Remove node at tail

        // Write your hypothesis on the time complexity of this method here
        // this is O(1)
    }

    peekAtHead() {

        if(this.head === null) return undefined;

        return this.head.value;
        // Return value of head node

        // Write your hypothesis on the time complexity of this method here
        // this is O(1)
    }

    peekAtTail() {

        if(this.tail === null) return undefined;

        return this.tail.value;
        // Return value of tail node

        // Write your hypothesis on the time complexity of this method here
        // this is O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
