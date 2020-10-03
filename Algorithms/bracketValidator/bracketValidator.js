const bracketValidator = (string) => {
    const brackets = [];
    for(let i = 0; i < string.length; i++){
        if(string[i] === '{') brackets.push('}')
        else if (string[i] === '[') brackets.push(']')
        else if (string[i] === '(') brackets.push(')')
        else if (string[i] === brackets[brackets.length - 1]) brackets.pop()
        else return false
    }
    return true
}

const tests=['[{[()]{}}[{(){}}]]','[{(){}}]]','[{(){())}}]]']

/* console.log(bracketValidator('{[{}({{{}}})]}')) */

for(let i in tests){
    console.log(bracketValidator(tests[i]))
}