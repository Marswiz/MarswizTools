import { M_getType } from './M_getType'

interface Obj{
    __proto__? : any
}

function isPrimaryType(arg) : boolean {
    return !!M_getType(arg).match(/String|Boolean|Number|Null|Undefined|BigInt|Symbol/)
}

export function M_deepCopy( obj : any ){
    let newObj : Obj = {}
    let ownKeys = [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)]
    ownKeys.forEach((key) => {
        let isPrimary = isPrimaryType(obj[key]);

        // Situation that Obj.key is primary variable.
        if (isPrimary) {
            newObj[key] = obj[key]
        }

        // Situation that Obj.key is Array
        else if ( !!M_getType( obj[key] ).match(/Array/) ) {
            let copiedArrObjValueOfKey = M_deepCopy(obj[key])
            let copiedArrValueOfKey = Array.from(copiedArrObjValueOfKey as [])
            newObj[key] = copiedArrValueOfKey
        }

        // Situation that Obj.key is plain Object.
        // OR Situation that Obj.key is Proxy, cuz the proxy always return a obj when checking its type.
        else if ( !!M_getType( obj[key] ).match(/Object/) ) {
            let copiedObjValueOfKey = M_deepCopy(obj[key])
            newObj[key] = copiedObjValueOfKey
        }

        // Situation that Obj.key is Date/RegExp.
        else if ( !!M_getType( obj[key] ).match(/Date|RegExp/) ) {
            let copiedDateValueOfKey = new Date(obj[key])
            newObj[key] = copiedDateValueOfKey
        }

        // Situation that Obj.key is Set.
        else if ( !!M_getType( obj[key] ).match(/Set/) ) {
            let copiedSetValueOfKey = new Set()
            for (let i of obj[key].values()) {
                if ( isPrimaryType(i) ){
                    copiedSetValueOfKey.add(i)
                } else {
                    copiedSetValueOfKey.add(M_deepCopy(i))
                }
            }
            newObj[key] = copiedSetValueOfKey
        }

        // Situation that Obj.key is Map.
        else if ( !!M_getType( obj[key] ).match(/Map/) ) {
            let copiedMapValueOfKey = new Map()
            for (let i of obj[key].keys()) {
                if ( isPrimaryType(i) ){
                    if ( isPrimaryType( obj[key].get(i) ) ){
                        copiedMapValueOfKey.set( i, obj[key].get(i) )
                    } else {
                        copiedMapValueOfKey.set( i, M_deepCopy(obj[key].get(i)) )
                    }
                } else {
                    if ( isPrimaryType( obj[key].get(i) ) ){
                        copiedMapValueOfKey.set( M_deepCopy(i) ,obj[key].get(i) )
                    } else {
                        copiedMapValueOfKey.set( M_deepCopy(i), M_deepCopy(obj[key].get(i)) )
                    }
                }
            }
            newObj[key] = copiedMapValueOfKey
        }

        // Situation that Obj.key is Promise/Generator/etc... and other situations, do no deep copy and just share the original obj.
        else {
            newObj[key] = obj[key]
        }
    })

    // prototype do not deep copy
    newObj.__proto__ = obj.__proto__

    return newObj
}
