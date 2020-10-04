const decimalToBin = (dec) => {
    let bin = ''
    if(dec){
        while(dec > 0){
        let val = dec % 2
        bin = val + bin
        dec = Math.floor(dec/2)
        }
        return bin
    }
    return 0
}
console.log(decimalToBin(2))

const decimalToBinRec = (dec) => {
    if(dec <= 0) return 0;
    return decimalToBin(Math.floor(dec/2)) + (dec % 2).toString();
}
console.log(decimalToBinRec(2))

// dtb = decimalToBin | d = decimal
const dtb = (d) => d > 1 ? dtb(Math.floor(d/2)) + (Number(d)%2).toString()  : d ? '1':'0';
console.log(dtb(2))