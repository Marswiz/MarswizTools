import {M_deepCopy, M_getType} from "../dist/utils";

let symbol = Symbol('name')
let mapProp = new Map();
let setProp = new Set();

mapProp.set('name','Mars');
mapProp.set({name: 'Mars'},'Mars');
mapProp.set('name',{name: 'Mars'});
mapProp.set({name: 'Mars'},{name: 'Mars'});

setProp.add(1)
setProp.add('2')
setProp.add({name: 'Mars'})
setProp.add([1,2,3,4])

let a = {
    a: '1',
    b: 2,
    c: true,
    d: null,
    e: undefined,
    f: {
        fa: 1,
        fb: true,
        fc: 123,
        fd: {
            name: 'mars'
        }
    },
    g: (a,b)=>{ return a+b },
    h: [1,2,3,'good',true],
    i: 123n,
    j: Symbol.for('j'),
    [symbol]: mapProp,
    map: mapProp,
    set: setProp,
    date: new Date(),
    proxy: new Proxy({a:2},{}),
    promise: new Promise((res,rej)=>{})
}

a.__proto__ = {
    a_proto_primary: 'good',
    a_proto_obj: {
        a: 1
    }
}

let b = M_deepCopy(a);

console.log(a)
console.log(b)
console.log(M_getType(a.proxy))
