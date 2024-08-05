/* Linked List: Linked list is a data structure used for storing a sequence of elements.
   Each element contained in a node. This structure allows more efficient for insertion and
   deletion when compared to the array.

   Node: Node contains the element and it's having the refrence or pointer of the next node
   Head: First node of the linked list
   Tail: Last node of the linked list
   Traversal: Visiting from first node to tail node or each node. This is process is the travelsal.

*/


/* Single Linked List 

   Tail node points to the null
   we can travelsal only uni directional first node to last node


   Operations:

     Insertion:
       At the begining 0(1): we have to insert the node and update the head pointer to the new node
       steps: create the new node, new node pointer to head node and make the new node to head node

       At the end 0(n): For inserting the node we have traverse entire list to find the last node 
       we have to insert the node at last and points the last node to new node

       After the Specific node 0(1): create the new node. 
       set the new node pointer to the given node after node. 
       set the given node pointer to the new node.

      Deletion:
       At the begining 
*/

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SingleLinkedList {
   constructor(){
    this.head = null
   }

   insertAtBegining(data){
    const node = new Node(data)
    node.next = this.head;
    this.head = node
   }

   insertAtEnd(data){
    const node = new Node(data)
    let current = this.head;
    while(current.next){
      this.current = this.current.next
    }
    current.next = node
   }
}


const SLL = new SingleLinkedList()

SLL.insertAtBegining(5)
SLL.insertAtBegining(10)
SLL.insertAtBegining(10)
console.log(SLL)


