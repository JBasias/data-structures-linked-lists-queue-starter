// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }


    addToHead(val)
    {

        this.length++;
        let newNode = new SinglyLinkedNode(val);

        if(this.head === null) this.head = newNode;

        newNode.next = this.head;

        this.head = newNode;
    }

    listLength() {

        return(this.length);
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
    }

    sumOfNodes() {

        let ret=0;
        let head = this.head;

        while(head!=null)
        {
            ret+=head.value;
            head = head.next;
        }

        return ret;
        // Returns the sum of the values of all the nodes

        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {

        if(this.length === 0) return undefined;

        return this.sumOfNodes()/this.length;
        // Returns the average value of all the nodes

        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {

        let head = this.head;

        while(head!=null && n>0)
        {
            head = head.next;
            n--;
        }

        if(n===0) return head;

        return undefined;
        // Returns the node at the nth index from the head

        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {


        return -1;
       // if(this.length === 0) return undefined;

        //if(this.length%2 === 1) return this.findNthNode((this.length-1)/2).value;


        //return(5);
        //return Math.floor((this.findNthNode(this.length/2) + this.findNthNode((this.length/2)))/2);
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {


        let head = this.head;

        let rev = new SinglyLinkedList();

        while(head != null)
        {
            rev.addToHead(head.value);
            head = head.next;
        }

        return rev;


        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {

        let rev = this.reverse();

        this.head = rev.head;

        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
    }
}

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

        this.length=0;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        this.length++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    addToHead(val)
    {

        this.length++;
        let newNode = new DoublyLinkedNode(val);

        if(this.head === null) this.head = newNode;

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {

        let head = this.head;

        let rev = new DoublyLinkedList();

        while(head != null)
        {
            rev.addToHead(head.value);
            head = head.next;
        }

        return rev;
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {


        let rev = this.reverse();

        this.head = rev.head;

        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
