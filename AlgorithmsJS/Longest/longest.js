const longest = (arr) => {
    if(!arr || !arr.length || typeof arr === 'string') return 0; // si me pasan algo invalido retorno 0
    let aux = []; // genero un arr donde voy a guardar las escaleras
    arr.forEach((num) => {
        if(!aux.length) aux.push([num]); // si no hay nada en aux agrego un arr con el primer numero
        // si algun numero es mayor al ultimo de alguna convinacion lo agrego en un nuevo arr
        else aux.forEach((stairs) => num > stairs[stairs.length-1] && aux.push([...stairs, num])); 
    })
    return aux.sort((a, b) => (a.length > b.length) && -1)[0].length // ordeno de mayor a menor y retorno el largo del primero
}

const arr = [3,4,5,12,1,10,11];
const arr2 = [10,22,9,33,20,50,41,60,80,21,23,24,25,26,27,28];
const arr3 = [1,1,1,1,1,1,1];

console.log(longest(arr));
console.log(longest(arr2));
console.log(longest(arr3));
console.log(longest());
  
  // (infinity**N) + (n log(n))
  // sort = O(n log(n))