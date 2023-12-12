const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {

        this.length++;
        let newNode = new SinglyLinkedNode(val);

        if(this.head == null)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
           this.tail.next = newNode;
           this.tail = newNode;
        }

        return this.length;
        // Add node to end of queue (linked list)

        // Write your hypothesis on the time complexity of this method here
        // this is O(1)
    }

    dequeue() {

        if(this.head === null) return null;

        this.length--;

        let ret = this.head;

        if(this.head.next === null)
        {
            this.head=null;
            this.tail=null;
        }
        else
        {
            this.head= this.head.next;
            this.head.prev=null;
        }

        return ret.value;



        // Remove node from front of queue (linked list)

        // Write your hypothesis on the time complexity of this method here
        // this likewise is O(1)
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
