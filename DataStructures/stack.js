class Stack {
    
    constructor(){
        this.storage = [];
        this.size = 0;
    }

    push(element){
        this.storage[this.size] =  element;
        this.size ++;
    }

    pop(){
        let removed = this.storage[this.size];
        delete this.storage[this.size-1];
        this.size --;
        return removed;
    }
}