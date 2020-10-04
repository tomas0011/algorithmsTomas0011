const sumArray = (arr, num) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === num) return true;
        }
    }
    return false;
}

const sumArray2 = (arr, num) => {
    if(num){
        let inicio = 0
        let fin = arr.length - 1
        while(inicio < fin){
            if(arr[inicio] + arr[fin] > num) fin--
            else if(arr[inicio] + arr[fin] < num) inicio++
            else if(arr[inicio] + arr[fin] === num) return true
        }
        return false
    } return 'num tiene el valor ' + num
}

const array = [1,2,3,4,5,6,7]
console.log(sumArray(array, 13))
console.log(sumArray2(array, 13))