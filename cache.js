const DoubleLikedList = require('./doubleLikedList')

class Cache {

    #limit = 0;
    #length = 0;
    #cached = {};
    #linkedList = null;

    constructor(limit) {
        if(!isNaN(limit)) this.#limit = limit;
        this.#linkedList = new DoubleLikedList();
    }

    get = (key) => {
        if(!key || !this.#isCached(key)) return;
        this.#toFirst(key);
        let obj ={};
        obj[this.#cached[key].value?.key] = this.#cached[key].value?.value;
        return obj;
    }

    set = (key,value) => {
        if(!key || !value) return;

        if(this.#isCached(key)) {
            this.#toFirst(key);
            return true;
        }

        if(this.isFull()) this.#removeLast();
        else this.#length++;
        this.#setInLikedList(key,value);
        return true;
        
    }

    toObject = () => {
        let obj = {};
        for (const key in this.#cached) {
            if (Object.hasOwnProperty.call(this.#cached, key)) {
                const element = this.#cached[key];
                obj[element.value.key] = element.value.value;
            }
        }
        return obj;
    }

    getLimit = () => {
        return this.#limit;
    }

    getSize = () => {
        return this.#length;
    }

    isFull = () => {
        return this.#limit == this.#length ? true : false;
    }

    getLinkedListAsArray = () => {
        return this.#linkedList.toArray();
    }

    #toFirst = (key) => {
        let oldNode = this.#cached[key];
        this.#linkedList.removeNode(oldNode);
        let node = this.#linkedList.addFirst(oldNode.value);
        this.#cached[key] = node;
    }
    
    #isCached = (key) => {
        return this.#cached[key] ? true : false;
    }

    #setInLikedList = (key,value) => {
        let obj = {key,value};
        let node = this.#linkedList.addFirst(obj);
        this.#cached[key] = node;
    }

    #removeLast = () => {
        let data = this.#linkedList.removeLast();
        if(data) delete this.#cached[data.key];
    }

}

module.exports = Cache;