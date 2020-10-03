const magicSquare = [   [2,7,6],
                        [9,5,1],
                        [4,3,8] ]

const magicSquare2 = [  [5,15,16,2],
                        [1,8,7,13],
                        [6,12,11,9],
                        [17,3,4,14]
]

const magicSquare3 = [  [17,24,1,8,15],
                        [23,5,7,14,16],
                        [4,6,13,20,22],
                        [10,12,19,21,3],
                        [11,18,25,2,9] ]


const isMagicSquare = (ms) => {
    const aux = []  // aca voy a invertir el cuadrado
    let value = 0

    let diag = 0  // este va a ser mi indice para conseguir las diagonales
    let arrDiag = []  // aca voy a guardar mi diagonal  

    ms.forEach((line, i) => {
        let suma = 0 
        line.forEach((num, j) => {
        aux[j] ? aux[j].push(num) : aux.push([num])
        suma += num
        })

        if(!value) value = suma // si no existe value seteo el primer resultado
        else if (!suma === value) return false // si el resultado es distinto rompo (false)

        arrDiag.push(line[diag]) // me almaceno el numero de la diagonal
        diag ++ // incremento mi diagonal
    })
    // si mi primera diagonal es distinta rompo (false)
    if(!(arrDiag.reduce((c,n)=>c+n) === value)) return false

    diag = 0  // reseteo el indice de la diagonal
    arrDiag = []  // reseteo mi diagonal
    aux.forEach((columna, i)=>{
        let suma = 0
        columna.forEach((num, j)=> {
            suma += num
            })
        if(!suma === value) return false // si el resultado es distinto rompo (false)
        arrDiag.push(columna[diag]) // me almaceno el numero de la diagonal
        diag++ // incremento mi diagonal
    })
    // si mi segunda diagonal es distinta rompo (false)
    if(!(arrDiag.reduce((c,n)=>c+n) === value)) return false
    return true
}

console.log(isMagicSquare(magicSquare))

console.log(isMagicSquare(magicSquare2))

console.log(isMagicSquare(magicSquare3))