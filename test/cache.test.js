const { it } = require('@jest/globals');
const Cache = require('../cache');

const limit = 3;
const cached = new Cache(limit);

describe('check cache properties before start',() => {

    it(`cached limit is ${limit}`, () => {
        expect(cached.getLimit()).toBe(limit);
    })

    it('cached size is 0 ', () => {
        expect(cached.getSize()).toBe(0);
    })

    it('cached size is full = false', () => {
        expect(cached.isFull()).toBeFalsy();
    })

    it('cached object is {} ', () => {
        expect(cached.toObject()).toEqual({});
    })
})


describe('insert 1 pair keys and values',() => {

    it(`set new key value {'one':1}`, () => {
        expect(cached.set('one',1)).toBeTruthy();
    })

    it(`cached size is 1`, () => {
        expect(cached.getSize()).toBe(1);
    })

    it(`cached size is full = false`, () => {
        expect(cached.isFull()).toBeFalsy();
    })

    it(`key value from key one = {'one':1}`, () => {
        expect(cached.get('one')).toEqual({'one':1});
    })

    it(`cached object is {'one':1}`, () => {
        expect(cached.toObject()).toEqual({'one':1});
    })

    it(`linked list value position = [{key:'one',value:1}]`, () => {
        expect(cached.getLinkedListAsArray()).toEqual([{key:'one',value:1}]);
    })

})


describe('insert 2 more pairs keys and values',() => {

    it(`set new key value {'two':2}`, () => {
        expect(cached.set('two',2)).toBeTruthy();
    })

    it(`set new key value {'three':3}`, () => {
        expect(cached.set('three',3)).toBeTruthy();
    })

    it(`key value from key two =  {'two':2}`, () => {
        expect(cached.get('two')).toEqual({'two':2} );
    })

    it(`key value from key three = {'three':3}`, () => {
        expect(cached.get('three')).toEqual({'three':3});
    })

    it(`cached size is 3`, () => {
        expect(cached.getSize()).toBe(3);
    })

    it(`cached size is full = true`, () => {
        expect(cached.isFull()).toBeTruthy();
    })

    it(`to object {'one':1,'two':2,'three':3}`, () => {
        expect(cached.toObject()).toEqual({'one':1,'two':2,'three':3});
    })

    it(`linked list value position [{key:'three',value:3},{key:'two',value:2},{key:'one',value:1}]`, () => {
        expect(cached.getLinkedListAsArray('one')).toEqual([{key:'three',value:3},{key:'two',value:2},{key:'one',value:1}]);
    })

})


describe(`check set existing key `,() => {

    it(`set new key value {'one':1}`, () => {
        expect(cached.set('one',1)).toBeTruthy();
    })

    it(`cached size is 3`, () => {
        expect(cached.getSize()).toBe(3);
    })

    it(`cached size is full = true`, () => {
        expect(cached.isFull()).toBeTruthy();
    })

    it(`to object {'one':1,'two':2,'three':3}`, () => {
        expect(cached.toObject()).toEqual({'one':1,'two':2,'three':3});
    })

    it(`linked list value position [{key:'one',value:1},{key:'three',value:3},{key:'two',value:2}]`, () => {
        expect(cached.getLinkedListAsArray('one')).toEqual([{key:'one',value:1},{key:'three',value:3},{key:'two',value:2}]);
    })
})


describe(`check get key `,() => {

    it(`key value from key one {'three':3}`, () => {
        expect(cached.get('three')).toEqual({'three':3});
    })

    it(`cached size is 3`, () => {
        expect(cached.getSize()).toBe(3);
    })

    it(`cached size is full = true`, () => {
        expect(cached.isFull()).toBeTruthy();
    })

    it(`to object {'one':1,'two':2,'three':3}`, () => {
        expect(cached.toObject()).toEqual({'one':1,'two':2,'three':3});
    })

    it(`linked list value position [{key:'three',value:3},{key:'one',value:1},{key:'two',value:2}`, () => {
        expect(cached.getLinkedListAsArray('one')).toEqual([{key:'three',value:3},{key:'one',value:1},{key:'two',value:2}]);
    })
})


describe(`set new key `,() => {

    it(`set new key value {'four':4}`, () => {
        expect(cached.set('four',4)).toBeTruthy();
    })

    it(`key value from key four = {'four':4}`, () => {
        expect(cached.get('four')).toEqual({'four':4});
    })

    it(`key value from key two = undefined`, () => {
        expect(cached.get('two')).toBeUndefined();
    })

    it(`cached size is 3`, () => {
        expect(cached.getSize()).toBe(3);
    })

    it(`cached size is full = true`, () => {
        expect(cached.isFull()).toBeTruthy();
    })

    it(`to object {'one':1,'two':2,'three':3}`, () => {
        expect(cached.toObject()).toEqual({'one':1,'four':4,'three':3});
    })

    it(`linked list value position [{key:'four',value:4},{key:'three',value:3},{key:'one',value:1}]`, () => {
        expect(cached.getLinkedListAsArray()).toEqual([{key:'four',value:4},{key:'three',value:3},{key:'one',value:1}]);
    })
})