class Node {
    constructor(data, next=null){
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList{
    constructor(){
      this.head = null;
      this.size = 0;
    }
  
    insertHead(data){
      this.head = new Node(data, this.head);
    }
  
  
    insertTail(data){
      let node = new Node(data);
      let current;
  
      if(!this.head){
        this.head = node;
      } else {
        current = this.head;
        while(current.next){
          current = current.next;
        }
  
        current.next = node;
      }
  
      this.size++;
    }
  
    insertIndex(data, index){
      if (index>1 && index>this.size){
        return;
      }
  
      if (index === 0){
        this.insertHead(data);
        return;
      }
  
      let node = new Node(data);
      let curr, prev;
      let count = 0;
      curr = this.head;
  
      while (count < index){
        prev = curr;
        count++;
        curr = curr.next;
      }
  
      node.next = curr;
      prev.next = node;
  
      this.size++;
  
  
    }
  
    reverse(){
      return; // soon
    }
  
    print(){
      let current = this.head;
      while(current){
        console.log(current.data);
        current = current.next;
      }
    }
  
    sizeOf(){
      return `size of a list is ${this.size}`;
    }
  }