const needleInHaistack = (needle, haystack) => {
    for(let h = 0; h < haystack.length; h++){
        console.log('haystack',h)
        for (let n = 0; n < needle.length; n++) {
        console.log('needle',n)
        console.log('haystack',haystack[n])
        console.log('matchNeedle',needle[n])
            if(haystack[h+n] !== needle[n]) break;
            if(n === needle.length-1) return h
        }
        console.log('--------------------------------------')
    }
    return -1
}