class Queue{

    constructor(){
        this.storage = [];
        this.top = 0;
        this.bottom = 0;
    }

    enqueue(element){
        this.storage[this.bottom] = element;
        this.bottom ++;
    }

    dequeue(){
        let remove = this.storage[this.top];
        delete this.storage[this.top];
        this.top++;
        this.bottom--;
        return remove;
    }
}