// const queue = [];

// queue.push('seahourse');
// queue.push('dolphin');

// queue.shift();

// console.log(queue);

class Queue {
    constructor() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(el) {
        this.storage[this.tail] = el;
        this.tail++;
    }

    dequeue() {
        let removed = this.storage[this.head];
        delete this.storage[this.head]
        this.head++;
        return removed;
    }
}

const queue = new Queue();

queue.enqueue('sea');
queue.enqueue('lake');
queue.dequeue();

console.log(queue);