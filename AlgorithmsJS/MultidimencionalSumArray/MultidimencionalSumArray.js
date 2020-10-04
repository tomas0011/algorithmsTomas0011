const multidimentionalSumArray = (arr) => {
    let acum = 0;

    for(i in arr){
        if(Array.isArray(arr[i])) acum += multidimentionalSumArray(arr[i])
        else acum += arr[i]
    }
    return acum
}

const multidimentionalSumArrayReduce = (arr) => arr.reduce((count, element) => Array.isArray(element) 
        ? count += multidimentionalSumArrayReduce(element)
        : count += element, 0)


console.log(multidimentionalSumArray([1,[2,5],-5,[1,[1],[2,[-2,[-5]]]]]))
console.log(multidimentionalSumArrayReduce([1,[2,5],-5,[1,[1],[2,[-2,[-5]]]]]))