const maxValue = (arr) => {
    let value=0;
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < min) min = arr[i]
        else if(arr[i] - min > value) value = arr[i] - min
    }
    return value
    }

const maxValueFor = (arr) => {
    let value = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
        if(arr[j] - arr[i] > value) value = arr[j] - arr[i]
        }
    }
    return value
}

console.log(maxValue([5,4,6,8,7,6,11]))
console.log(maxValueFor([5,4,6,8,7,6,11]))