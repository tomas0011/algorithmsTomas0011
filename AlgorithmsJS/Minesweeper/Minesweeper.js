const campo = [
    ["+","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","+"],
    ["|"," ","*","*","*"," "," ","*"," ","*","*","*"," ","*","*","*"," "," "," "," ","*","*","*","*"," ","*","|"],
    ["|","*"," ","*","*","*"," "," "," ","*"," "," ","*"," "," ","*"," "," "," "," "," ","*"," "," "," "," ","|"],
    ["|"," "," "," "," "," "," "," "," ","*","*","*","*"," "," ","*"," "," "," "," ","*","*","*","*","*","*","|"],
    ["|"," "," ","*"," ","*","*","*","*","*","*","*"," "," "," ","*","*","*"," ","*","*"," "," ","*","*"," ","|"],
    ["|"," "," "," ","*","*"," "," "," ","*","*","*","*"," ","*"," "," "," ","*","*"," ","*"," "," "," "," ","|"],
    ["|","*"," ","*","*","*","*"," ","*","*"," "," ","*","*","*","*","*","*","*"," ","*"," "," ","*"," ","*","|"],
    ["|","*","*","*","*"," ","*"," "," ","*"," ","*","*"," ","*","*"," ","*"," ","*","*","*","*"," ","*"," ","|"],
    ["|"," ","*"," ","*"," ","*","*"," ","*"," "," "," "," "," "," ","*"," "," ","*"," ","*"," "," "," ","*","|"],
    ["|"," "," ","*"," "," "," "," ","*"," ","*"," "," ","*"," ","*","*","*"," "," ","*"," "," "," ","*","*","|"],
    ["|"," ","*"," ","*","*"," "," "," ","*"," ","*"," "," "," "," ","*"," "," ","*","*","*","*","*"," "," ","|"],
    ["|","*"," "," ","*"," ","*","*"," "," "," "," ","*"," ","*","*"," ","*"," "," ","*"," ","*","*"," "," ","|"],
    ["|","*"," "," ","*"," "," ","*","*","*"," "," ","*","*","*"," "," ","*","*"," "," "," "," "," ","*"," ","|"],
    ["|","*"," ","*","*"," "," "," ","*"," "," ","*"," ","*"," ","*","*","*","*"," "," ","*","*","*"," ","*","|"],
    ["|"," ","*","*"," ","*","*","*"," "," "," "," "," "," "," "," ","*"," "," "," "," "," "," "," ","*"," ","|"],
    ["|"," "," "," "," ","*","*"," ","*","*","*"," ","*","*"," "," ","*"," "," ","*","*","*","*"," ","*"," ","|"],
    ["|","*"," ","*"," "," "," "," "," ","*","*"," ","*"," ","*"," "," "," "," "," ","*"," ","*","*","*"," ","|"],
    ["|"," "," "," ","*","*","*","*"," ","*"," ","*"," ","*","*","*"," ","*","*","*"," "," ","*","*","*"," ","|"],
    ["|","*"," ","*","*","*"," "," ","*"," "," ","*"," ","*","*"," "," "," ","*"," "," ","*","*"," "," ","*","|"],
    ["|","*","*"," "," ","*"," "," "," ","*","*","*","*","*","*"," ","*","*","*","*"," "," ","*"," "," "," ","|"],
    ["|","*","*","*"," "," "," "," "," ","*","*","*","*","*","*"," "," "," ","*"," "," "," ","*","*","*"," ","|"],
    ["|"," "," ","*","*"," "," "," ","*","*","*"," ","*","*","*"," "," ","*"," ","*","*"," "," "," ","*","*","|"],
    ["|","*","*"," ","*","*","*"," ","*"," "," "," ","*","*"," "," "," "," "," ","*"," ","*"," "," "," ","*","|"],
    ["|"," ","*","*"," "," ","*","*"," ","*"," "," "," "," "," ","*"," ","*","*","*","*"," ","*"," ","*"," ","|"],
    ["|"," ","*"," "," ","*"," "," ","*","*"," "," "," ","*","*"," "," ","*"," "," "," ","*"," "," ","*"," ","|"],
    ["|"," "," ","*"," "," "," ","*","*"," "," ","*","*","*"," "," "," "," ","*"," ","*"," "," "," "," "," ","|"],
    ["+","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","+"]   ]

const campo2 = [    ["+","-","-","-","-","-","+"],
                    ["|"," "," ","*"," "," ","|"],
                    ["|","*"," "," ","*","*","|"],
                    ["|","*"," ","*","*"," ","|"],
                    ["|","*"," "," "," ","*","|"],
                    ["|"," ","*"," "," ","*","|"],
                    ["+","-","-","-","-","-","+"]   ]


// funcion para traerme la fila
const getFila = (m, f) => m[f]
// funcion clonar arr
const clone = (items) => items.map((i) => (Array.isArray(i) ? clone(i) : i))

// SOLUCION DEL PROBLEMA
const completeMinesweeper = (matriz) => {

    const solucion = clone(matriz)

    solucion.forEach((fila, i)=>{
        if(!(!i || i === fila.length-1)){
            //consigo las filas anteriores y posterires
            const fila1 = getFila(solucion, i-1)
            const fila2 = getFila(solucion, i+1)
            fila.forEach((espacio, j)=>{
                let sum = 0;
                if(espacio === ' '){
                    // en la misma linea
                    if(fila[j-1] === '*') sum++
                    if(fila[j+1] === '*') sum++

                    // en la linea anterior
                    if(fila1[j-1] === '*') sum++
                    if(fila1[j] === '*') sum++
                    if(fila1[j+1] === '*') sum++

                    // en la linea posterior
                    if(fila2[j-1] === '*') sum++
                    if(fila2[j] === '*') sum++
                    if(fila2[j+1] === '*') sum++

                    // almaceno mi valor
                    fila[j] = sum;
                }
            })
        }
    })

    return {
        problem: matriz,
        solution: solucion
    }
}

console.log(completeMinesweeper(campo2))