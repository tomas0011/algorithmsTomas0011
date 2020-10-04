function parseHHMM(arg){
    let sum = 0;
    sum += Number(arg[0])*10*60;
    sum += Number(arg[1])*60;
    sum += Number(arg[3])*10;
    sum += Number(arg[4])
    return sum
}

function parseMinutes(minutes){
    let hours = (
        (Math.floor(minutes/60)%12) === 0) && minutes >(12*60-1)  
            ? '12'
            :(Math.floor(minutes/60)%12)>9 
                ? (Math.floor(minutes/60)%12)
                :('0'+ Math.floor(minutes/60)%12);

    let min = Math.floor(minutes%60);
    return (hours + ':' + (min > 9 ? min : ('0' + min)))
}

function resolveProblem(arg,add){
    let sum = parseHHMM(arg)+add

    return parseMinutes(sum)
}
console.log(resolveProblem('12:05',100))

//|=============================================================================|//

const clockMinuteAdder = (clock, add) => {
    let [hour, min] = clock.split(':')
    
    hour = Number(hour)
    min = Number(min)

    min += (hour * 60) + Number(add)

    hour = (Math.floor(min/60)%12)
    min = min % 60

    hour = hour.toString().length - 1 ? hour.toString() : '0' + hour.toString()
    min = min.toString().length - 1 ? min.toString() : '0' + min.toString()

    return [hour, min].join(':')
}
console.log(clockMinuteAdder('12:00', 240))

//|=============================================================================|//

function horario (hora, num) {
    let [horas, minutos]= hora.split (":")
    horas = Number(hour)
    minutos = Number(min)

    minutos = horas * 60 + minutos + num  
    horas = Math.floor(minutos/60) 
    var min = minutos%60 
    horas= (horas%12).toString()
    if(horas==="0"){
        horas="12"
    }
    min = min.toString()
    if (horas.length<2 ) {
        horas = "0".concat(horas)
    }
    if (min.length<2) {
        min=  "0".concat(min)
    }
    return horas.concat(":",min)
}
console.log(horario("12:05",1232))
