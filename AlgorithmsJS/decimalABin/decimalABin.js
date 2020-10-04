function bintodec(string){
    let sum = 0 ;
    let i= string.length-1;
    let j = 0;
    while(j<string.length){
            sum += Number(string[j++])(2*i--)
        }
    return sum
}

console.log(bintodec('11010'))