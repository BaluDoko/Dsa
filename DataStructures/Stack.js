/* Stack: Stack is basic data structure is used to store and retreive the elements.
    It follows Last In First Out (LIFO) means which element is last we can remove that element first.

    Operations:
     push: adding element to top of the stack  0(1)
     pop: removing element from top of the stack  0(1)
     peek/top: printing the top element of the stack 0(1)
     isEmpty: check whether stack is empty or not 0(1)
     size: Printing the number of elements in a stack 0(1)

*/

class Stack {

    constructor(elements = []){
        this.items = elements
        this.count = 0
    }

    push(item){
       this.items.push(item)
       this.count++
       return this.count
    }

    pop(){
       let ele = this.items.pop()
        this.count -= 1
        return ele
    }

    peek(){
       if(this.isEmpty()){
        return new Error("Stack is Empty")
       }
       return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.count === 0
    }

    size(){
        return this.count
    }

}

const stack = new Stack([]);

stack.push(2)
stack.push(2)
stack.push(4)
stack.push(4)
stack.push(8)
console.log(stack)
console.log(stack.pop())
console.log(stack)

console.log(stack.pop())
console.log(stack)
console.log(stack.peek())

console.log(stack.size())



