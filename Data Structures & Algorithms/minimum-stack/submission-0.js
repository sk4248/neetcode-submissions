class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class MinStack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const newNode = new Node(val);

        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this;
    }

    /**
     * @return {void}
     */
    pop() {
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp
    }

    /**
     * @return {number}
     */
    top() {
        return this.first.val;
    }

    /**
     * @return {number}
     */
    getMin() {
      let min = +Infinity;
      let current = this.first;
      while(current !== null){
        if(current.val <= min){
          min = current.val;
        }
        current = current.next;
      }
      return min;
    }
}