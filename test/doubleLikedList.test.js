const { it } = require('@jest/globals');
const DoubleLikedList = require('../doubleLikedList');
const linkedList = new DoubleLikedList();

describe('liked list is empty',() => {

    it('value of the last node is undefined', () => {
        expect(linkedList.getLast()).toBeUndefined();
    });

    it('value of the first node is undefined',() => {
        expect(linkedList.getFirst()).toBeUndefined();
    });

    it('linked list size == 0',() => {
        expect(linkedList.size()).toBe(0);
    });

    it('linked list to array == []',() => {
        expect(linkedList.toArray()).toEqual([]);
    });
})

describe('add new node to start of liked list',() => {

    it('add value 10', () => {
        expect(linkedList.addFirst(10)).not.toBeUndefined();
    });

    it('value of the first node == 10',() => {
        expect(linkedList.getFirst()).toBe(10);
    });

    it('linked list size == 1',() => {
        expect(linkedList.size()).toBe(1);
    });

    it('linked list to array == [10]',() => {
        expect(linkedList.toArray()).toEqual([10]);
    });
})


describe('remove the last node from linked list',() => {

    it('remove last node last value == 10', () => {
        expect(linkedList.removeLast()).toBe(10);
    });

    it('linked list size == 0',() => {
        expect(linkedList.size()).toBe(0);
    });

    it('linked list first node is undefined',() => {
        expect(linkedList.getFirst()).toBeUndefined();
    });

    it('linked list last node is undefined',() => {
        expect(linkedList.getLast()).toBeUndefined();
    });
})

describe('add few nodes not linked list',() => {

    it('add value 1', () => {
        expect(linkedList.addFirst(1)).not.toBeUndefined();
    });

    it('add value 2', () => {
        expect(linkedList.addFirst(2)).not.toBeUndefined();
    });

    it('add value 3', () => {
        expect(linkedList.addFirst(3)).not.toBeUndefined();
    });

    it('add value 4', () => {
        expect(linkedList.addFirst(4)).not.toBeUndefined();
    });

    it('add value 5', () => {
        expect(linkedList.addFirst(5)).not.toBeUndefined();
    });

    it('remove last node first value == 5', () => {
        expect(linkedList.getFirst()).toBe(5);
    });

    it('remove last node first value == 1', () => {
        expect(linkedList.getLast()).toBe(1);
    });

    it('linked list size == 5',() => {
        expect(linkedList.size()).toBe(5);
    });

    it('linked list to array == [5,4,3,2,1]',() => {
        expect(linkedList.toArray()).toEqual([5,4,3,2,1]);
    });
})


describe('clear linked list',() => {

    it('remove last node last value == 1', () => {
        expect(linkedList.removeLast()).toBe(1);
    });

    it('linked list size == 4',() => {
        expect(linkedList.size()).toBe(4);
    });

    it('linked list first node is 5',() => {
        expect(linkedList.getFirst()).toBe(5);
    });

    it('linked list last node is 2',() => {
        expect(linkedList.getLast()).toBe(2);
    });

    it('linked list to array == [5,4,3,2]',() => {
        expect(linkedList.toArray()).toEqual([5,4,3,2]);
    });

    it('remove last node last value == 2', () => {
        expect(linkedList.removeLast()).toBe(2);
    });

    it('linked list size == 3',() => {
        expect(linkedList.size()).toBe(3);
    });

    it('linked list first node is 5',() => {
        expect(linkedList.getFirst()).toBe(5);
    });

    it('linked list last node is 3',() => {
        expect(linkedList.getLast()).toBe(3);
    });

    it('linked list to array == [5,4,3]',() => {
        expect(linkedList.toArray()).toEqual([5,4,3]);
    });

    it('remove last node last value == 3', () => {
        expect(linkedList.removeLast()).toBe(3);
    });

    it('linked list size == 2',() => {
        expect(linkedList.size()).toBe(2);
    });

    it('linked list first node is 5',() => {
        expect(linkedList.getFirst()).toBe(5);
    });

    it('linked list last node is 4',() => {
        expect(linkedList.getLast()).toBe(4);
    });

    it('linked list to array == [5,4]',() => {
        expect(linkedList.toArray()).toEqual([5,4]);
    });

    it('remove last node last value == 4', () => {
        expect(linkedList.removeLast()).toBe(4);
    });

    it('linked list size == 1',() => {
        expect(linkedList.size()).toBe(1);
    });

    it('linked list first node is 5',() => {
        expect(linkedList.getFirst()).toBe(5);
    });

    it('linked list last node is 5',() => {
        expect(linkedList.getLast()).toBe(5);
    });

    it('linked list to array == [5]',() => {
        expect(linkedList.toArray()).toEqual([5]);
    });

    it('remove last node last value == 5', () => {
        expect(linkedList.removeLast()).toBe(5);
    });

    it('linked list size == 0',() => {
        expect(linkedList.size()).toBe(0);
    });

    it('linked list first node is undefined',() => {
        expect(linkedList.getFirst()).toBeUndefined();;
    });

    it('linked list last node is undefined',() => {
        expect(linkedList.getFirst()).toBeUndefined();
    });

    it('linked list to array == []',() => {
        expect(linkedList.toArray()).toEqual([]);
    });
})