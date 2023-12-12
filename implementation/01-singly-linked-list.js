// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {

        this.length++;
        let Node = new SinglyLinkedNode(val);

        if(this.head === null) this.head=Node;
        else
        {
            Node.next = this.head;
            this.head = Node;
        }
        // Add node of val to head of linked list

        // Write your hypothesis on the time complexity of this method here

        // this is O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list

        this.length++;

        let newNode = new SinglyLinkedNode(val);

        if(this.head === null)
        {
            this.head = newNode;

            return;
            //this.t
        }

        let head = this.head;

        if (head.next !=null) {
            head = head.next;
            //return head;
        }

        head.next = newNode;



        /*
        let curr = head;
        while (curr) {
            curr = current.next;
        }
        curr.next = newNode;*/

        return newNode;

        /// this is O(n)
    }

    removeFromHead() {

        if(this.head === null) return;

        let ret=this.head;

        this.length--;

        this.head = this.head.next;

        return ret;
        // Remove node at head

        // Write your hypothesis on the time complexity of this method here
        // this is O(1)
    }

    removeFromTail() {

        if(this.head == null) return;

        this.length--;

        let ret;

        if(this.head.next === null)
        {
            ret= this.head;
            this.head = null;

            return ret;
        }


        let head = this.head;

        //let ret;

        /*
        if(head.next == null)
        {
            ret = head;
            head=null;

            return(ret);

        }*/

        while(head.next.next != null)
        {
           head = head.next;
        }

        ret = head.next;
        head.next =  null;

        return ret;
        // Remove node at tail

        // Write your hypothesis on the time complexity of this method here
        // this is O(n)
    }

    peekAtHead() {

        if(this.head === null) return undefined;


        return this.head.value;
        // Return value of head node

        // Write your hypothesis on the time complexity of this method here
        // this is O(1)
    }

    print() {

        let head = this.head;

        while(head != null)
        {
            console.log(head.value);
            head = head.next;
        }
        // Print out the linked list

        // Write your hypothesis on the time complexity of this method here
        // this is O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
