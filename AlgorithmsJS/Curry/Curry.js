function curry (cb, args = []) {
    // defino el valor inicial de args
    // me almaceno la cantidad de valores que puede recibir la funcion
    const final = cb.length
    return function ejec (val) {
        // si me pasan mas de un valor y no superan la cantidad de valores que puede recibir la funcion
        if(arguments.length <= (final - args.length)){
            // los voy agregando de a uno
            for(let i in arguments) args.push(arguments[i])
        } else args.push(val) // sino agrego el primero

        // si se llega al ultimo ejecuto
        if(args.length === final){
            return cb(...args)
        }
        // sino retorno la misma funcion
        return ejec
    }
}

// funcion a testear
function sumNums (v1, v2, v3) {
    return v1 + v2 + v3
}

const first = curry(sumNums)
const second = first(1,3)
const third = second(10)
console.log(third)
// este rompe VV
const fourth = third(10)
console.log(fourth)