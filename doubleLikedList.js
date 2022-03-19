class DoubleLikedList {

    #first = null;
    #last = null;
    #length = 0;

    #node = class {
        prev = null;
        next = null;
        value = null;
        constructor(value) {
            this.value = value;
        }
    }
    //add create new node and add it to the start on the linked list
    addFirst = (value) => {
        let node = new this.#node(value);
        if(this.#first) {
            let first = this.#first;
            node.next = first;
            first.prev = node;
        }
        this.#first = node;
        if(!this.#last) this.#last = node;
        this.#length++;

        return node;
    }

    //remove the last node from linked list
    removeLast = () => {
        if(!this.#last || !this.size()) return;

        let last = this.#last;
        let prev = this.#last.prev;

        if(this.size() == 1) {
            this.#first = null;
            this.#last = null;
        }
        else if(prev) {
            prev.next = null;
            this.#last.prev = null;
            this.#last = prev;
        }
        
        this.#length--;
        return last.value;
    }

    //remove node by specific node
    removeNode = (node) => {
        let prev = node.prev;
        let next = node.next;

        if(this.#first == node) this.#first = node.next;
        if(this.#last == node) this.#last = node.prev;

        if(prev) prev.next = next;
        if(next) next.prev = prev;

        node.prev = null;
        node.next = null;
    }

    toArray = () => {
        if(!this.size()) return [];
        let arr = [];
        let next = this.#first;
        while(next) {
            arr.push(next.value);
            next = next.next;
        }
        return arr;
    }
    
    size() {
        return this.#length;
    }

    getFirst() {
        return this.#first?.value;
    }

    getLast() {
        return this.#last?.value;
    }

}



module.exports = DoubleLikedList;
