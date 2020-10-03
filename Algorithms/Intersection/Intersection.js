const array1=[1,4,6,8,10,11]
const array2=[4,5,7,8,9]

const intersection = (arr1, arr2) => {
    const match = [];
    arr1.forEach((num1) => {
        arr2.forEach((num2) => {
        if(num1 === num2) match.push(num1)
        })
    })
    return match
}

const intersectionReduce = (arr1, arr2) => {
    const match = []
    let j = 0

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] === arr2[j]) {
            match.push(arr1[i]) // pusheo si matchea
            j++ // incremento j
        } else if (arr1[i] > arr2[j]) {
            j++ // incremento el j porque no matchea
            i-- // decremento el i para poder volver a iterar
        } if(!arr2[j]) break // si me quedo sin j rompo
    }
    return match
}

console.log(intersection(array1, array2))
// complejidad O(n**m)

console.log(intersectionReduce(array1, array2))
// complejidad O(n)