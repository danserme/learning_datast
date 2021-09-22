// const stack = [];

// stack.push('dog');
// stack.push('cat');

// stack.pop();

// const peek = stack[stack.length - 1];

// console.log(stack);
// console.log(peek);


class Stack {
    constructor() {
        this.storage = {};
        this.size = 0;
    }

    pushes(el) {
        this.size++;
        this.storage[this.size] = el;
    }

    pops() {
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }

    peek() {
        return this.storage[this.size];
    }
}

let newS = new Stack();
newS.pushes('dog');
newS.pushes(1);
// newS.pops();

console.log(newS);