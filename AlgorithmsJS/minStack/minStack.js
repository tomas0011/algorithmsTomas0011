
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(value){
      this.top = null;
    }
    push(value) {
      if(!this.top) this.top = new Node(value);
      else {
        const newTop = new Node(value);
        newTop.next = this.top;
        this.top = newTop;
      }
    }
    pop() {
      const oldTop = this.top;
      this.top = oldTop && oldTop.next;
      return oldTop && oldTop.value;
    }
    peek() {
      return this.top && this.top.value
    }
  }
  
  const pila = new Stack()
  pila.push(1)
  pila.push(2)
  pila.push(2)
  pila.push(3)
  pila.push(4)
  pila.push(5)
  pila.pop()
  console.log(pila.peek())
  console.log(pila)
  console.log('-------------------------------------------')
  
  class MinStack extends Stack {
    constructor(value){
      super()
      this.min = new Stack;
    }
    push(value) {
      if(!this.top) {
        this.top = new Node(value);
        this.min.push(value)
      }
      else {
        const newTop = new Node(value);
        newTop.next = this.top;
        this.top = newTop;
        if(this.min.peek() > value) this.min.push(value);
        else this.min.push(this.min.peek());
      }
    }
    pop() {
      const oldTop = this.top;
      this.top = oldTop && oldTop.next;
      this.min.pop();
      return oldTop && oldTop.value;
    }
    minimum() {
      return this.min.peek()
    }
  }
  
  const stackMin = new MinStack()
  stackMin.push(1)
  stackMin.push(2)
  stackMin.push(3)
  stackMin.push(0)
  stackMin.push(0)
  stackMin.pop()
  console.log(stackMin.minimum())
  
  console.log(stackMin)