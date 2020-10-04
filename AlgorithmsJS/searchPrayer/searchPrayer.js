const searchPrayers = (book, prayer) => {
    const { text } = book
    const array = [];
    let num = 0;
    for(let i = 0; i < text.length; i++){
        if(text[i-1] === ' ' || i === 0) {
            num = !i ? 0 : i+1;
            for(let j = 0; j < prayer.length; j++){
                if(text[i+j] === prayer[j] && prayer.length - 1 === j) array.push(num)
                else if(text[i+j] !== prayer[j]) break
            }
        }
        else continue
    }
    return array
}

// 'otro ejemplo interesante que mi amigo tomi va a tener que resolver correctamente'
// 'tomi tomto'

const book1 = {
text: 'otro ejemplo interesante que mi amigo tomi va a tener que resolver correctamente'
}

console.log(searchPrayers(book1, 'te'))
//0(N)