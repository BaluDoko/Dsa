/* Queue: Queue is a basic data structure for storing and retriving elements. 
   It follows the fast in first out (FIFO) means which element added in first we can remove that elements first

   Operations:
   Enqueue: Adds an element to end of the queue  0(1)
   Dequeue: Removes an element to front of the queue
   Time complexity 0(n) because we have remove the first element we have arrange the 
   Front/Peek: print first element of the queue 0(1)
   isEmpty: print items in the queue is 0 or not  0(1)
   size: print the items in the queue  0(1)

*/


class Queue {
    constructor(elements){
        this.items = elements;
        this.count = 0;
        this.front = 0;
        this.end = 0;
    }

    enqueue(element){
        this.items.push(element)
        this.count++
        this.end++
    }

    dequeue(){
        if(this.count === 0){
          return  new Error("No Elements in Queue")
        }
        let item = this.items[this.front];
        this.items.shift()
        this.count--;
        this.end--
        return item;
    }

    isEmpty(){
        return this.items.length === 0
    }

    clear(){
        this.items = []
        this.front = 0
        this.end =0
    }

    size(){
        return this.count
    }
}


const queue = new Queue([]);

queue.enqueue(5)


queue.enqueue(5)

queue.enqueue(5)

queue.enqueue(7)

queue.dequeue(5)

console.log(queue)

