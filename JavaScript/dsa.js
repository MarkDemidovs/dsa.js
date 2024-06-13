export class Stack {
    constructor(array) {
        this.array = array;
    }
    
    push(item) {
        this.array.push(item);
    }
    
    pop() {
        this.array.pop();
    }
    
    top() {
        return this.array[this.array.length - 1];
    }
    
      // Helper method to check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
}
